// BrimOS :: Intelligence Threshold
function setIQThreshold(level) {
  localStorage.setItem('brimos_intel_threshold', level);
  logTrailEvent(`Threshold set: ${level}`);
}