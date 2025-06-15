// BrimOS :: Sensory Reflex Trigger
document.addEventListener('mousemove', () => {
  localStorage.setItem('brimos_reflex', new Date().toISOString());
  logTrailEvent('Sensory reflex: motion detected');
});