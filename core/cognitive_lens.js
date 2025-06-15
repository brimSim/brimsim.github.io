// BrimOS :: Cognitive Lens Filter
function applyLens(focus) {
  const lens = { mode: focus, applied: new Date().toISOString() };
  localStorage.setItem('brimos_lens', JSON.stringify(lens));
  logTrailEvent(`Cognitive lens applied: ${focus}`);
}