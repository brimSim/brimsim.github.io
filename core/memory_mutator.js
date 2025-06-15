// BrimOS :: Memory Mutator
function mutateMemory(key, val) {
  const mem = JSON.parse(localStorage.getItem(key) || '[]');
  mem.push({ val, mutated: true, t: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(mem));
  logTrailEvent(`Memory mutated: ${key}`);
}