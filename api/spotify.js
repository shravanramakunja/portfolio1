// Vercel serverless function — fetches currently playing / last played song from Spotify
// Uses a stored refresh token + client credentials (safe server-side)

const CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.VITE_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token refresh failed: ${res.status} — ${text}`);
  }

  const data = await res.json();
  if (!data.access_token) throw new Error('No access_token in response');
  return data.access_token;
}

async function fetchCurrentlyPlaying(token) {
  const res = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    { headers: { Authorization: `Bearer ${token}` } },
  );
  if (res.status === 204 || !res.ok) return null;
  const data = await res.json();
  if (data?.item) {
    return {
      title: data.item.name,
      artist: data.item.artists.map((a) => a.name).join(', '),
      url: data.item.external_urls.spotify,
      albumArt: data.item.album.images[0]?.url,
      isPlaying: data.is_playing,
    };
  }
  return null;
}

async function fetchRecentlyPlayed(token) {
  const res = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    { headers: { Authorization: `Bearer ${token}` } },
  );
  if (!res.ok) return null;
  const data = await res.json();
  if (data?.items?.length > 0) {
    const track = data.items[0].track;
    return {
      title: track.name,
      artist: track.artists.map((a) => a.name).join(', '),
      url: track.external_urls.spotify,
      albumArt: track.album.images[0]?.url,
      isPlaying: false,
    };
  }
  return null;
}

export default async function handler(req, res) {
  // CORS — allow same-origin requests from the frontend
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // If refresh token isn't configured yet, tell the user
  if (!REFRESH_TOKEN) {
    return res.status(200).json({
      track: null,
      needsSetup: true,
      message: 'SPOTIFY_REFRESH_TOKEN not configured',
    });
  }

  try {
    const accessToken = await getAccessToken();
    let track = await fetchCurrentlyPlaying(accessToken);
    if (!track) track = await fetchRecentlyPlayed(accessToken);
    res.status(200).json({ track, needsSetup: false });
  } catch (error) {
    console.error('Spotify API error:', error);
    res.status(200).json({ track: null, needsSetup: false, error: error.message });
  }
}
