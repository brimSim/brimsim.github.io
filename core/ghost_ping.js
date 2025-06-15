// BrimOS :: Ghost Ping
function pingGhost(path) {
  const log = { path, timestamp: new Date().toISOString() };
  localStorage.setItem(`brimos_ping_${path}`, JSON.stringify(log));
  logTrailEvent(`Ghost ping: ${path}`);
}
