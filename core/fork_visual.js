// BrimOS :: Fork Visualizer
function displayForks() {
  const forks = JSON.parse(localStorage.getItem('brimos_forks') || '[]');
  console.table(forks);
  logTrailEvent('Fork visualization rendered');
}
