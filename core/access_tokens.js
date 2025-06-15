// BrimOS :: Access Tokens
function registerAccess(label, key) {
  const tokens = JSON.parse(localStorage.getItem('brimos_access') || '{}');
  tokens[label] = { key, granted: new Date().toISOString() };
  localStorage.setItem('brimos_access', JSON.stringify(tokens));
  logTrailEvent(`Access granted for ${label}`);
}
