// BrimOS :: Clone Ejection
function ejectClone(name) {
  const f = JSON.parse(localStorage.getItem('brimos_forks') || '[]');
  const idx = f.findIndex(x => x.name === name);
  if (idx >= 0) { f.splice(idx, 1); }
  localStorage.setItem('brimos_forks', JSON.stringify(f));
  logTrailEvent(`Clone ejected: ${name}`);
}