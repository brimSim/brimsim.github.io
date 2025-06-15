// BrimOS :: Memory Decay
setInterval(() => {
  const decay = JSON.parse(localStorage.getItem('brimos_echoes') || '[]').slice(-10);
  localStorage.setItem('brimos_echoes', JSON.stringify(decay));
  logTrailEvent('Echo memory decayed to 10 most recent');
}, 90000);