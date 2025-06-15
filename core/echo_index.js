// BrimOS :: Echo Indexer
function indexEchoes() {
  const e = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  localStorage.setItem('brimos_echo_index', JSON.stringify({ count: e.length, time: new Date().toISOString() }));
  logTrailEvent('Echo index rebuilt');
}
