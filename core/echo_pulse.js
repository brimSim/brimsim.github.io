// BrimOS :: Echo Pulse Tracker
setInterval(() => {
  const echoes = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  if (echoes.length > 0) {
    const latest = echoes[echoes.length - 1];
    logTrailEvent(`Echo pulse: ${latest.message}`);
  }
}, 30000);
