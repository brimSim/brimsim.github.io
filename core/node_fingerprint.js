// BrimOS :: Node Fingerprint
function getNodeFingerprint() {
  const fingerprint = {
    platform: navigator.platform,
    language: navigator.language,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('brimos_node_fingerprint', JSON.stringify(fingerprint));
  logTrailEvent('Node fingerprint captured');
}
