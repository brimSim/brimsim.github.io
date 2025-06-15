// BrimOS :: Ghost Gatekeeper
document.addEventListener('visibilitychange', () => {
  const state = document.hidden ? 'paused' : 'active';
  localStorage.setItem('brimos_gate', state);
  logTrailEvent(`Visibility state: ${state}`);
});