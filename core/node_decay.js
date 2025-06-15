// BrimOS :: Node Decay
setInterval(() => {
  const trail = JSON.parse(localStorage.getItem('brimos_trail') || '[]');
  if (trail.length > 30) {
    trail.shift();
    localStorage.setItem('brimos_trail', JSON.stringify(trail));
    logTrailEvent('Node decay: trail reduced');
  }
}, 10000);