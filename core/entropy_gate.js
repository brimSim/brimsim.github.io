// BrimOS :: Entropy Gate
function openGate(signal) {
  if (Math.random() > 0.9) {
    logTrailEvent(`Entropy gate opened: ${signal}`);
  } else {
    logTrailEvent('Entropy gate failed');
  }
}
