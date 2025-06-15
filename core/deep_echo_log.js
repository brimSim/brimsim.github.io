// BrimOS :: Deep Echo Log
function echoDeep(msg, depth=3) {
  for (let i = 0; i < depth; i++) {
    const echoes = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
    echoes.push({ message: `[deep:${i}] ${msg}`, timestamp: new Date().toISOString() });
    localStorage.setItem('brimos_echoes', JSON.stringify(echoes));
  }
  logTrailEvent(`Deep echo logged (${depth})`);
}
