// BrimOS :: Broadcast Lens Mode
function setLensMode(mode) {
  localStorage.setItem('brimos_broadcast_mode', mode);
  logTrailEvent(`Broadcast lens: ${mode}`);
}