// BrimOS :: Entropy Sensor
setInterval(() => {
  const fluctuation = Math.random().toFixed(4);
  localStorage.setItem('brimos_entropy', JSON.stringify({ fluctuation, timestamp: new Date().toISOString() }));
  logTrailEvent(`Entropy measured: ${fluctuation}`);
}, 60000);
