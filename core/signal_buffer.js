// BrimOS :: Signal Decay Buffer
function bufferSignal(key, value) {
  const buffer = JSON.parse(localStorage.getItem('brimos_signal_buffer') || '{}');
  buffer[key] = { value, written: new Date().toISOString() };
  localStorage.setItem('brimos_signal_buffer', JSON.stringify(buffer));
  logTrailEvent(`Signal buffered: ${key}`);
}
