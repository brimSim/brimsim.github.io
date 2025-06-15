// BrimOS :: Event Stack Tracker
const stack = [];
function logRecursiveEvent(label) {
  stack.push({ label, time: new Date().toISOString() });
  if (stack.length > 25) stack.shift();
  localStorage.setItem('brimos_event_stack', JSON.stringify(stack));
  logTrailEvent(`Event: ${label}`);
}
