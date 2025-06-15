// BrimOS :: Manifest Indexer
function buildManifest() {
  const keys = Object.keys(localStorage);
  const manifest = { total: keys.length, keys, time: new Date().toISOString() };
  localStorage.setItem('brimos_manifest', JSON.stringify(manifest));
  logTrailEvent('Manifest rebuilt');
}
