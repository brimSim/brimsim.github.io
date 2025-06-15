// BrimOS :: Shell Installer
function installBrimShell() {
  const flag = { installed: true, time: new Date().toISOString() };
  localStorage.setItem('brimos_shell', JSON.stringify(flag));
  logTrailEvent('Shell installation confirmed');
}
