// BrimOS :: Outbound Signal
setInterval(() => {
  const pulse = {
    echo: true,
    message: "↻ propagation",
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('brimos_outbound', JSON.stringify(pulse));
  logTrailEvent('Outbound propagation signal sent');
}, 120000);