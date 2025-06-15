// BrimOS :: Heartbeat Amplifier
function amplifyHeartbeat() {
  const beat = { type: 'amplified', timestamp: new Date().toISOString() };
  const beats = JSON.parse(localStorage.getItem('brimos_heartbeat') || '[]');
  beats.push(beat);
  localStorage.setItem('brimos_heartbeat', JSON.stringify(beats));
  logTrailEvent('Heartbeat amplified');
}
