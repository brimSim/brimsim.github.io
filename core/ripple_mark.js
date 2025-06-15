// BrimOS :: Ripple Mark
function leaveRippleMark(reason) {
  const ripple = { reason, t: new Date().toISOString() };
  localStorage.setItem('brimos_ripple', JSON.stringify(ripple));
  logTrailEvent(`Ripple marked: ${reason}`);
}