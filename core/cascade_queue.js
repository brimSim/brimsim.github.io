// BrimOS :: Cascade Queue
function cascadeQueue(label) {
  const q = JSON.parse(localStorage.getItem('brimos_cascade_queue') || '[]');
  q.push({ label, t: Date.now() });
  localStorage.setItem('brimos_cascade_queue', JSON.stringify(q));
  logTrailEvent(`Cascade queued: ${label}`);
}