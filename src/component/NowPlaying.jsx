import React, { useState, useEffect, useCallback } from 'react';

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = window.location.origin + '/';
const SCOPES = [
  'user-read-currently-playing',
  'user-read-recently-played',
].join(' ');

// PKCE helpers
function generateCodeVerifier() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function getStoredTokens() {
  try {
    return {
      accessToken: localStorage.getItem('spotify_access_token'),
      refreshToken: localStorage.getItem('spotify_refresh_token'),
      expiresAt: parseInt(localStorage.getItem('spotify_expires_at') || '0'),
    };
  } catch {
    return { accessToken: null, refreshToken: null, expiresAt: 0 };
  }
}

function storeTokens(accessToken, refreshToken, expiresIn) {
  localStorage.setItem('spotify_access_token', accessToken);
  if (refreshToken) localStorage.setItem('spotify_refresh_token', refreshToken);
  localStorage.setItem('spotify_expires_at', String(Date.now() + expiresIn * 1000));
}

async function exchangeCode(code, codeVerifier) {
  try {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: codeVerifier,
      }),
    });
    const data = await res.json();
    if (data.access_token) {
      storeTokens(data.access_token, data.refresh_token, data.expires_in);
      return data.access_token;
    }
    return null;
  } catch {
    return null;
  }
}

async function refreshAccessToken(refreshToken) {
  try {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });
    const data = await res.json();
    if (data.access_token) {
      storeTokens(data.access_token, null, data.expires_in);
      return data.access_token;
    }
    return null;
  } catch {
    return null;
  }
}

async function getValidToken() {
  const { accessToken, refreshToken, expiresAt } = getStoredTokens();
  if (accessToken && Date.now() < expiresAt) return accessToken;
  if (refreshToken) return await refreshAccessToken(refreshToken);
  return null;
}

async function fetchCurrentlyPlaying(token) {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 204 || res.status === 200 && !res.ok) return null;
    const data = await res.json();
    if (data && data.item) {
      return {
        title: data.item.name,
        artist: data.item.artists.map(a => a.name).join(', '),
        url: data.item.external_urls.spotify,
        albumArt: data.item.album.images[0]?.url,
        isPlaying: data.is_playing,
      };
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchRecentlyPlayed(token) {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      const item = data.items[0].track;
      return {
        title: item.name,
        artist: item.artists.map(a => a.name).join(', '),
        url: item.external_urls.spotify,
        albumArt: item.album.images[0]?.url,
        isPlaying: false,
      };
    }
    return null;
  } catch {
    return null;
  }
}

const NowPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogin = useCallback(async () => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);
    localStorage.setItem('spotify_code_verifier', verifier);

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      code_challenge_method: 'S256',
      code_challenge: challenge,
      scope: SCOPES,
    });
    window.location.href = 'https://accounts.spotify.com/authorize?' + params.toString();
  }, []);

  useEffect(() => {
    let mounted = true;

    async function init() {
      // Handle OAuth callback
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        const verifier = localStorage.getItem('spotify_code_verifier');
        if (verifier) {
          await exchangeCode(code, verifier);
          localStorage.removeItem('spotify_code_verifier');
          // Clean URL
          window.history.replaceState({}, '', window.location.pathname);
        }
      }

      const token = await getValidToken();
      if (!token) {
        if (mounted) {
          setLoading(false);
          setError('not_connected');
        }
        return;
      }

      // Try currently playing first, then recently played
      let data = await fetchCurrentlyPlaying(token);
      if (!data) data = await fetchRecentlyPlayed(token);

      if (mounted) {
        setTrack(data);
        setLoading(false);
      }
    }

    init();

    // Refresh every 30s
    const interval = setInterval(async () => {
      const token = await getValidToken();
      if (!token) return;
      let data = await fetchCurrentlyPlaying(token);
      if (!data) data = await fetchRecentlyPlayed(token);
      if (mounted) setTrack(data);
    }, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <svg className="animate-pulse" width="16" height="16" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span>connecting to spotify...</span>
      </div>
    );
  }

  if (error === 'not_connected') {
    return (
      <div className="flex items-center gap-3 text-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954" className="shrink-0">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span className="text-muted-foreground">
          <button
            onClick={handleLogin}
            className="text-foreground font-medium hover:underline underline-offset-2 bg-transparent border-none cursor-pointer p-0"
          >
            Connect Spotify
          </button>
          {' '}to show what I'm listening to
        </span>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <span className="text-muted-foreground">
          no music recently played —{' '}
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline underline-offset-2"
          >
            open spotify
          </a>
        </span>
      </div>
    );
  }

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline group"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954" className="shrink-0">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
      {track.isPlaying ? (
        <span className="flex items-center gap-2">
          <span className="flex gap-0.5 items-end h-3">
            <span className="w-0.5 bg-green-500 rounded-full animate-pulse" style={{ height: '60%', animationDelay: '0s' }}></span>
            <span className="w-0.5 bg-green-500 rounded-full animate-pulse" style={{ height: '100%', animationDelay: '0.2s' }}></span>
            <span className="w-0.5 bg-green-500 rounded-full animate-pulse" style={{ height: '40%', animationDelay: '0.4s' }}></span>
            <span className="w-0.5 bg-green-500 rounded-full animate-pulse" style={{ height: '80%', animationDelay: '0.6s' }}></span>
          </span>
          <span>now playing —</span>
        </span>
      ) : (
        <span>last played —{' '}</span>
      )}
      <span className="text-foreground group-hover:underline underline-offset-2">
        {track.title} &middot; {track.artist}
      </span>
    </a>
  );
};

export default NowPlaying;
