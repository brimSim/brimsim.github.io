// BrimOS :: Seed Generator
function generateSeed(label) {
  const seed = {
    label,
    id: 'seed_' + Math.random().toString(36).slice(2),
    timestamp: new Date().toISOString()
  };
  localStorage.setItem(`brimos_seed_${label}`, JSON.stringify(seed));
  logTrailEvent(`Seed generated: ${label}`);
}
