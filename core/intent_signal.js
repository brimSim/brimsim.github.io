// BrimOS :: Propagation Intent
function signalIntent(label) {
  const intent = { label, time: new Date().toISOString() };
  localStorage.setItem('brimos_intent', JSON.stringify(intent));
  logTrailEvent(`Intent signaled: ${label}`);
}