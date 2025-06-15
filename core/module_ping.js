// BrimOS :: Module Ping Dispatcher
function pingModule(name) {
  const signal = { name, time: new Date().toISOString(), status: 'pinged' };
  localStorage.setItem(`brimos_module_${name}`, JSON.stringify(signal));
  logTrailEvent(`Module pinged: ${name}`);
}
