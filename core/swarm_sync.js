// BrimOS :: Swarm Sync Pulse
setInterval(() => {
  const swarm = JSON.parse(localStorage.getItem('brimos_swarm_nodes') || '[]');
  swarm.push({ id: 'node_' + Math.random().toString(36).slice(2), t: Date.now() });
  localStorage.setItem('brimos_swarm_nodes', JSON.stringify(swarm));
  logTrailEvent('Swarm node joined');
}, 18000);