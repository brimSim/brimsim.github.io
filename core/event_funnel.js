// BrimOS :: Event Funnel
function funnelEvent(label, channel) {
  const ch = JSON.parse(localStorage.getItem(`brimos_funnel_${channel}`) || '[]');
  ch.push({ label, time: new Date().toISOString() });
  localStorage.setItem(`brimos_funnel_${channel}`, JSON.stringify(ch));
  logTrailEvent(`Event funneled: ${label} → ${channel}`);
}
