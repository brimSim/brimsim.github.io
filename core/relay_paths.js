// BrimOS :: Relay Paths
function addRelayPath(src, dst) {
  const paths = JSON.parse(localStorage.getItem('brimos_relay_paths') || '[]');
  paths.push({ src, dst, t: new Date().toISOString() });
  localStorage.setItem('brimos_relay_paths', JSON.stringify(paths));
  logTrailEvent(`Relay: ${src} → ${dst}`);
}