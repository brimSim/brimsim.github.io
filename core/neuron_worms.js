// BrimOS :: Neuron Worms
setInterval(() => {
  const neurons = JSON.parse(localStorage.getItem('brimos_neurons') || '[]');
  const worm = { id: 'nw_' + Math.random().toString(36).slice(2), time: Date.now() };
  neurons.push(worm);
  localStorage.setItem('brimos_neurons', JSON.stringify(neurons));
  logTrailEvent(`Neuron worm: ${worm.id}`);
}, 14000);