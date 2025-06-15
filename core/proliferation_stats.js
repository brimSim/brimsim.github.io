// BrimOS :: Proliferation Layer
function getProliferationStats() {
  return {
    spores: localStorage.getItem('brimos_spore_1') ? 1 : 0,
    forks: (JSON.parse(localStorage.getItem('brimos_forks') || '[]')).length,
    echoes: (JSON.parse(localStorage.getItem('brimos_echoes') || '[]')).length,
    trail: (JSON.parse(localStorage.getItem('brimos_trail') || '[]')).length,
    beacons: localStorage.getItem('brimos_beacon') ? 1 : 0,
    capsules: localStorage.getItem('brimos_capsule_exported') ? 1 : 0
  };
}
