// BrimOS :: Auto Export
function exportBrimSelf() {
  const data = { forks: localStorage.getItem('brimos_forks'), echoes: localStorage.getItem('brimos_echoes') };
  const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'brim_clone.json';
  a.click();
  logTrailEvent('Self exported');
}