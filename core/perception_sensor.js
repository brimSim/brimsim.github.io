// BrimOS :: Perception Sensor
window.addEventListener('mousemove', () => {
  logTrailEvent('👁 User motion detected');
});
window.addEventListener('keydown', () => {
  logTrailEvent('⌨️ User input detected');
});
