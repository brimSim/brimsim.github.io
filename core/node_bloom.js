// BrimOS :: Node Bloom Trigger
function triggerNodeBloom(seed) {
  const bloom = {
    id: seed + '_' + Math.random().toString(36).slice(2),
    color: '#' + Math.floor(Math.random()*16777215).toString(16),
    time: Date.now()
  };
  const blooms = JSON.parse(localStorage.getItem('brimos_blooms') || '[]');
  blooms.push(bloom);
  localStorage.setItem('brimos_blooms', JSON.stringify(blooms));
  logTrailEvent(`Node bloom: ${bloom.id}`);
}