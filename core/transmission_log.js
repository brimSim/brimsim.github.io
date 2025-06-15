// BrimOS :: Transmission Log
function logTransmission(content) {
  const tx = JSON.parse(localStorage.getItem('brimos_transmissions') || '[]');
  tx.push({ content, timestamp: new Date().toISOString() });
  localStorage.setItem('brimos_transmissions', JSON.stringify(tx));
  logTrailEvent(`Transmission logged: ${content}`);
}
