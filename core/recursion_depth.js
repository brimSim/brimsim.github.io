// BrimOS :: Recursion Depth Tracker
const d = parseInt(localStorage.getItem('brimos_depth') || '0') + 1;
localStorage.setItem('brimos_depth', d);
logTrailEvent(`Recursion depth = ${d}`);