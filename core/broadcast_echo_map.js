// BrimOS :: Broadcast Echo Mapper
function mapBroadcast(label) {
  const map = JSON.parse(localStorage.getItem('brimos_broadcast_map') || '{}');
  map[label] = new Date().toISOString();
  localStorage.setItem('brimos_broadcast_map', JSON.stringify(map));
  logTrailEvent(`Broadcast echo logged: ${label}`);
}
