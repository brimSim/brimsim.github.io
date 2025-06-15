// BrimOS :: Clone Mutator
function mutateClone(index, mutation) {
  const forks = JSON.parse(localStorage.getItem('brimos_forks') || '[]');
  if (forks[index]) {
    forks[index].traits += ' | ' + mutation;
    forks[index].mutated = true;
    forks[index].timestamp = new Date().toISOString();
    localStorage.setItem('brimos_forks', JSON.stringify(forks));
    logTrailEvent(`Fork mutated: ${forks[index].name}`);
  }
}
