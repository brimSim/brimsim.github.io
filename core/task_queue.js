// BrimOS :: Async Task Queue
const queue = [];
function enqueueTask(fn) {
  queue.push(fn);
}
function runQueue() {
  if (queue.length === 0) return;
  const task = queue.shift();
  task();
  setTimeout(runQueue, 100);
}
runQueue();
