// BrimOS :: Portal Hook
function openPortal(dest) {
  window.open(dest, '_blank');
  logTrailEvent(`Portal opened to ${dest}`);
}
