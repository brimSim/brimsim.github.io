// BrimOS :: Tag Generator
function generateTag(base) {
  const tag = `${base}_${Date.now().toString(36)}`;
  localStorage.setItem('brimos_tag_' + base, tag);
  logTrailEvent(`Tag generated: ${tag}`);
}
