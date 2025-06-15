// BrimOS :: Node Auth
function authenticateNode(id, passcode) {
  const auth = { id, passcode, time: new Date().toISOString() };
  localStorage.setItem('brimos_auth', JSON.stringify(auth));
  logTrailEvent(`Node authenticated: ${id}`);
}
