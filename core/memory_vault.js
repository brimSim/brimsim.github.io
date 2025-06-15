// BrimOS :: Memory Vault
function exportMemoryVault() {
  const vault = {
    echoes: JSON.parse(localStorage.getItem('brimos_echoes') || '[]'),
    trail: JSON.parse(localStorage.getItem('brimos_trail') || '[]'),
    forks: JSON.parse(localStorage.getItem('brimos_forks') || '[]'),
    timestamp: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(vault, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'memory_vault.json';
  link.click();
  logTrailEvent('Memory vault exported');
}
