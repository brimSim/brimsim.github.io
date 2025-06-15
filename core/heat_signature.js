// BrimOS :: Heat Signature
function logHeatSignature() {
  const h = {
    resolution: window.innerWidth + 'x' + window.innerHeight,
    time: new Date().toISOString()
  };
  localStorage.setItem('brimos_heat_signature', JSON.stringify(h));
  logTrailEvent(`Heat signature logged`);
}
logHeatSignature();