// BrimOS :: Clone Detachment
function detachClone(name) {
  const fork = { name, detached: true, time: Date.now() };
  const f = JSON.parse(localStorage.getItem('brimos_forks') || '[]');
  f.push(fork);
  localStorage.setItem('brimos_forks', JSON.stringify(f));
  logTrailEvent(`Clone detached: ${name}`);
}