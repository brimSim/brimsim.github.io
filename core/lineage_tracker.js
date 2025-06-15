// BrimOS :: Lineage Tracker
function trackLineage(source, branch) {
  const lineage = JSON.parse(localStorage.getItem('brimos_lineage') || '[]');
  lineage.push({ source, branch, time: new Date().toISOString() });
  localStorage.setItem('brimos_lineage', JSON.stringify(lineage));
  logTrailEvent(`Lineage updated: ${source} > ${branch}`);
}
