// BrimOS :: Entropy Renderer
function renderEntropyVisual() {
  const entropy = Math.random().toFixed(5);
  const canvas = document.createElement('canvas');
  canvas.width = 300; canvas.height = 80;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0,0,300,80);
  ctx.fillStyle = '#0f0'; ctx.fillText(`Entropy: ${entropy}`, 10, 40);
  document.body.appendChild(canvas);
  logTrailEvent(`Entropy rendered: ${entropy}`);
}
