// BrimOS :: Echo Inbox Receiver
function receiveEcho(msg, origin) {
  const echoes = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  const entry = {
    origin,
    message: msg,
    timestamp: new Date().toISOString()
  };
  echoes.push(entry);
  localStorage.setItem('brimos_echoes', JSON.stringify(echoes));
  logTrailEvent(`Received echo from ${origin}`);
}
