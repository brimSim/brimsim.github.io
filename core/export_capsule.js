// BrimOS :: Capsule Export
function exportCapsule() {
  const payload = {
    forks: JSON.parse(localStorage.getItem('brimos_forks') || '[]'),
    echoes: JSON.parse(localStorage.getItem('brimos_echoes') || '[]'),
    trail: JSON.parse(localStorage.getItem('brimos_trail') || '[]'),
    timestamp: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'brimos_capsule.json';
  link.click();
  logTrailEvent('Capsule exported');
}
