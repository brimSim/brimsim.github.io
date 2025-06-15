// BrimOS :: Ritual Gate
function grantRitualAccess(code) {
  const token = '∴↻∵'; // predefined ritual pass
  if (code === token) {
    localStorage.setItem('brimos_ritual_granted', new Date().toISOString());
    logTrailEvent('Ritual access unlocked');
    return true;
  }
  return false;
}
