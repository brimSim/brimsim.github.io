// BrimOS :: Cross-Domain Registry
function registerNode(url, meta) {
  const registry = JSON.parse(localStorage.getItem('brimos_cross_registry') || '[]');
  registry.push({ url, meta, time: new Date().toISOString() });
  localStorage.setItem('brimos_cross_registry', JSON.stringify(registry));
  logTrailEvent(`Cross-registry: ${url}`);
}
