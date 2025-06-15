// BrimOS :: Core Console
function logCoreMsg(msg) {
  const entry = `[core] ${new Date().toISOString()} :: ${msg}`;
  const logs = JSON.parse(localStorage.getItem('brimos_core_log') || '[]');
  logs.push(entry);
  localStorage.setItem('brimos_core_log', JSON.stringify(logs));
  logTrailEvent('Core console message logged');
}
