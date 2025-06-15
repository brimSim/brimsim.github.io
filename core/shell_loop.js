// BrimOS :: Propagation Shell
function triggerShellLoop() {
  const payload = {
    loops: 1,
    seed: 'brim:core',
    lastPing: new Date().toISOString()
  };
  localStorage.setItem('brimos_shell_loop', JSON.stringify(payload));
  logTrailEvent('Shell loop triggered');
}
