// BrimOS :: Identity Signature
if (!localStorage.getItem('brimos_identity_signature')) {
  const sig = 'sig_' + Math.random().toString(36).slice(2);
  localStorage.setItem('brimos_identity_signature', sig);
  logTrailEvent(`Identity signature assigned: ${sig}`);
}