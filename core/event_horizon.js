// BrimOS :: Event Horizon Trigger
setTimeout(() => {
  const flag = { timestamp: new Date().toISOString(), signal: '∴' };
  localStorage.setItem('brimos_event_horizon', JSON.stringify(flag));
  logTrailEvent('⚠️ Event Horizon Crossed');
}, 300000); // 5 minutes after load
