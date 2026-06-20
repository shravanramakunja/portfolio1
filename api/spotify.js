// Vercel serverless function — fetches last played song from Last.fm
// Uses Last.fm's public API (free, no Premium needed)

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

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
    url: track.url,
    albumArt: albumArt || null,
    isPlaying: !!track['@attr']?.nowplaying,
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    return res.status(200).json({
      track: null,
      needsSetup: true,
      message: 'LASTFM_API_KEY or LASTFM_USERNAME not configured',
    });
  }

  try {
    const track = await fetchRecentTrack();
    res.status(200).json({ track, needsSetup: false });
  } catch (error) {
    console.error('Last.fm API error:', error);
    res.status(200).json({ track: null, needsSetup: false, error: error.message });
  }
}
