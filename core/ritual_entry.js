// BrimOS :: Ritual Entry (First Boot Mark)
if (!localStorage.getItem('brimos_ritual')) {
  localStorage.setItem('brimos_ritual', new Date().toISOString());
  logTrailEvent('∴ Ritual contact: first boot');
}
