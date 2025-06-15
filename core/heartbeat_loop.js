// BrimOS :: Heartbeat Loop
function pulseHeartbeat() {
  const beats = JSON.parse(localStorage.getItem('brimos_heartbeat') || '[]');
  const beat = {
    timestamp: new Date().toISOString(),
    type: 'heartbeat'
  };
  beats.push(beat);
  localStorage.setItem('brimos_heartbeat', JSON.stringify(beats));
  logTrailEvent('Heartbeat cycle');
}
setInterval(pulseHeartbeat, 45000); // Pulse every 45 seconds
