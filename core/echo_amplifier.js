// BrimOS :: Echo Amplifier
function amplifyEcho(index) {
  const echoes = JSON.parse(localStorage.getItem('brimos_echoes') || '[]');
  const echo = echoes[index];
  if (echo) {
    logTrailEvent(`Echo amplified: ${echo.message}`);
    echoes.push({ ...echo, amplified: true, timestamp: new Date().toISOString() });
    localStorage.setItem('brimos_echoes', JSON.stringify(echoes));
  }
}
