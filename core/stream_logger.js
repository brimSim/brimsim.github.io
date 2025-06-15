// BrimOS :: Stream Logger
function logStream(msg) {
  const stream = JSON.parse(localStorage.getItem('brimos_stream_log') || '[]');
  stream.push({ msg, time: new Date().toISOString() });
  localStorage.setItem('brimos_stream_log', JSON.stringify(stream));
  logTrailEvent(`Stream message: ${msg}`);
}
