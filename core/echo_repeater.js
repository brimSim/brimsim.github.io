// BrimOS :: Echo Repeater
function repeatEcho() {
  const echoes = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  const e = echoes[echoes.length - 1];
  if (e) {
    echoes.push({ msg: `repeat:${e.msg}`, timestamp: new Date().toISOString() });
    localStorage.setItem('brimos_echoes', JSON.stringify(echoes));
    logTrailEvent(`Echo repeated: ${e.msg}`);
  }
}