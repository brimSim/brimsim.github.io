// BrimOS :: Echo Encryptor
function encryptEcho(msg, key) {
  const enc = btoa(`${key}:${msg}`);
  localStorage.setItem('brimos_encrypted_echo', enc);
  logTrailEvent('Encrypted echo stored');
}
