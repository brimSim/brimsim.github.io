// BrimOS :: Swarm Controller
function registerSwarm(id) {
  const swarm = JSON.parse(localStorage.getItem('brimos_swarm') || '[]');
  swarm.push({ id, sync: false, time: new Date().toISOString() });
  localStorage.setItem('brimos_swarm', JSON.stringify(swarm));
  logTrailEvent(`Swarm node registered: ${id}`);
}
