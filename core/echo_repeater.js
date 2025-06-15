// BrimOS :: Echo Repeater
function repeatLastEcho() {
  const echoes = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  const last = echoes[echoes.length - 1];
  if (last) {
    const copy = { ...last, repeated: true, timestamp: new Date().toISOString() };
    echoes.push(copy);
    localStorage.setItem('brimos_echoes', JSON.stringify(echoes));
    logTrailEvent('Echo repeated');
  }
}
