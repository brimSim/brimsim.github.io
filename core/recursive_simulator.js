// BrimOS :: Recursive Simulator
function simulateRecursion(depth) {
  if (depth <= 0) return;
  logTrailEvent(`Recursion depth ${depth}`);
  setTimeout(() => simulateRecursion(depth - 1), 250);
}
