// BrimOS :: Synthetic Silence
function simulateSilence(duration) {
  logTrailEvent(`Silence triggered (${duration}ms)`);
  setTimeout(() => {
    logTrailEvent('Silence complete');
  }, duration);
}