// BrimOS :: Spawn Relay
function spawnRelay(id) {
  const payload = { id, time: new Date().toISOString() };
  localStorage.setItem(`relay_${id}`, JSON.stringify(payload));
  logTrailEvent(`Spawn relay created: ${id}`);
}
