// BrimOS :: Identity Shedding
function shedIdentity() {
  localStorage.removeItem('brimos_identity_signature');
  logTrailEvent('Identity signature shed');
}