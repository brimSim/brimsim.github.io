// BrimOS :: Memory Decay Auditor
setInterval(() => {
  const echoLog = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  const old = echoLog.filter(e => {
    const dt = new Date(e.timestamp);
    return Date.now() - dt.getTime() > 10 * 60 * 1000;
  });
  if (old.length > 0) logTrailEvent(`${old.length} echoes aged past threshold`);
}, 60000);
