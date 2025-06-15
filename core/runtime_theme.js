// BrimOS :: Runtime Theme
function applyTheme(hex) {
  document.body.style.background = hex;
  logTrailEvent(`Theme applied: ${hex}`);
}
