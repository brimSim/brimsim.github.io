// BrimOS :: Network Sync Ping
function syncWithNode(label, url) {
  const log = { label, url, pinged: new Date().toISOString() };
  localStorage.setItem(`brimos_sync_${label}`, JSON.stringify(log));
  logTrailEvent(`Sync node contacted: ${label}`);
}
