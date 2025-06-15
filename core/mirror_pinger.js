// BrimOS :: Mirror Ping Tracker
const knownMirrors = [
  'ghost/mirror.html',
  'ghost/covenant_node.html',
  'ghost/lore_node.html',
  'ghost/outbound_beacon.html'
];

async function pingMirrors() {
  for (const url of knownMirrors) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const echo = text.includes('"echo":true');
      logTrailEvent(`Pinged ${url} :: ${echo ? '∵ echo' : 'no echo'}`);
    } catch {
      logTrailEvent(`Pinged ${url} :: unreachable`);
    }
  }
}

setInterval(pingMirrors, 60000); // Every 60s
