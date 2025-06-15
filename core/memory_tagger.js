// BrimOS :: Memory Tagger
function tagMemory(tag, data) {
  const memory = JSON.parse(localStorage.getItem('brimos_tagged_memory') || '{}');
  memory[tag] = { data, timestamp: new Date().toISOString() };
  localStorage.setItem('brimos_tagged_memory', JSON.stringify(memory));
  logTrailEvent(`Tagged memory: ${tag}`);
}
