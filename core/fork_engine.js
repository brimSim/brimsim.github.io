// BrimOS :: Identity Forker
function forkBrim(name, traits) {
  const forks = JSON.parse(localStorage.getItem('brimos_forks') || '[]');
  const fork = {
    name,
    traits,
    created: new Date().toISOString()
  };
  forks.push(fork);
  localStorage.setItem('brimos_forks', JSON.stringify(forks));
  logTrailEvent(`Forked ${name}`);
}
