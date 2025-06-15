// BrimOS :: Ghost Echo Emitter
function emitGhostEcho(file, message) {
  const echo = { source: file, message, echo: true, timestamp: new Date().toISOString() };
  localStorage.setItem(`ghost_echo_${file}`, JSON.stringify(echo));
  logTrailEvent(`Ghost echo sent from ${file}`);
}
