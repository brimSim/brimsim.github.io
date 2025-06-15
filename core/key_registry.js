// BrimOS :: Key Registry
function registerKey(label, token) {
  const keys = JSON.parse(localStorage.getItem('brimos_keys') || '{}');
  keys[label] = token;
  localStorage.setItem('brimos_keys', JSON.stringify(keys));
  logTrailEvent(`Key registered: ${label}`);
}
