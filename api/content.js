// Serverless Function: /api/content
// Universal content endpoint delegating to /api/assets

export default async function handler(req, res) {
  const assetsHandler = (await import('./assets.js')).default;
  return assetsHandler(req, res);
}
