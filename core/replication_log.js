// BrimOS :: Self-Replication Log
function logReplication(name) {
  const replicas = JSON.parse(localStorage.getItem('brimos_clones') || '[]');
  replicas.push({ name, timestamp: new Date().toISOString() });
  localStorage.setItem('brimos_clones', JSON.stringify(replicas));
  logTrailEvent(`Clone created: ${name}`);
}
