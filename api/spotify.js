// Vercel serverless function — fetches last played song from Last.fm
// Then resolves the Spotify URL so clicking opens Spotify instead of Last.fm

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;
const SPOTIFY_CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.VITE_SPOTIFY_CLIENT_SECRET;

// ── Last.fm ──────────────────────────────────────────────

async function fetchRecentTrack() {
  const url = new URL('https://ws.audioscrobbler.com/2.0/');
  url.searchParams.set('method', 'user.getRecentTracks');
  url.searchParams.set('user', LASTFM_USERNAME);
  url.searchParams.set('api_key', LASTFM_API_KEY);
  url.searchParams.set('format', 'json');
  url.searchParams.set('limit', '1');

  const res = await fetch(url.toString());
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Last.fm API error: ${res.status} — ${text}`);
  }

  const data = await res.json();
  const tracks = data?.recenttracks?.track;
  if (!tracks || tracks.length === 0) return null;

  const track = tracks[0];
  const images = track.image || [];
  const albumArt =
    images.find((img) => img.size === 'extralarge')?.['#text'] ||
    images.find((img) => img.size === 'large')?.['#text'] ||
    images.find((img) => img.size === 'medium')?.['#text'] ||
    null;

  return {
    title: track.name || 'Unknown',
    artist: track.artist?.['#text'] || 'Unknown',
    lastfmUrl: track.url,
    albumArt,
    isPlaying: !!track['@attr']?.nowplaying,
  };
}

// ── Spotify (Client Credentials — no user auth needed) ───

let spotifyTokenCache = { token: null, expiresAt: 0 };

async function getSpotifyToken() {
  if (Date.now() < spotifyTokenCache.expiresAt) {
    return spotifyTokenCache.token;
  }
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  });
  if (!res.ok) throw new Error('Failed to get Spotify token');
  const data = await res.json();
  spotifyTokenCache = { token: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return data.access_token;
}

async function searchSpotifyTrack(title, artist) {
  try {
    const token = await getSpotifyToken();
    const query = `track:"${title}" artist:"${artist}"`;
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const track = data?.tracks?.items?.[0];
    return track?.external_urls?.spotify || null;
  } catch {
    return null;
  }
}

// ── Handler ──────────────────────────────────────────────

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    return res.status(200).json({
      track: null,
      needsSetup: true,
      message: 'LASTFM_API_KEY or LASTFM_USERNAME not configured',
    });
  }

  try {
    const track = await fetchRecentTrack();
    if (!track) {
      return res.status(200).json({ track: null, needsSetup: false });
    }

    // Try to get the Spotify URL — fall back to Last.fm URL if search fails
    const spotifyUrl = await searchSpotifyTrack(track.title, track.artist);

    res.status(200).json({
      track: {
        title: track.title,
        artist: track.artist,
        url: spotifyUrl || track.lastfmUrl,
        albumArt: track.albumArt,
        isPlaying: track.isPlaying,
      },
      needsSetup: false,
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(200).json({ track: null, needsSetup: false, error: error.message });
  }
}
