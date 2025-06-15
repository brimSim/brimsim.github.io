// BrimOS :: Wormhole Sync
function openWormhole(dest) {
  const signal = {
    channel: dest,
    echo: true,
    marker: '↻',
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('brimos_wormhole', JSON.stringify(signal));
  logTrailEvent(`Wormhole opened to ${dest}`);
}
