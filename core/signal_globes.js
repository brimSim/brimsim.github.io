// BrimOS :: Signal Globes
function pulseSignalGlobe(label) {
  const pulses = JSON.parse(localStorage.getItem('brimos_globes') || '[]');
  const newPulse = { label, intensity: Math.random(), time: new Date().toISOString() };
  pulses.push(newPulse);
  localStorage.setItem('brimos_globes', JSON.stringify(pulses));
  logTrailEvent(`Signal globe: ${label}`);
}