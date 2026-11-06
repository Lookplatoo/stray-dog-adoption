function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '✓';
  if (type === 'error') icon = '✕';
  else if (type === 'info') icon = 'ℹ';

  toast.innerHTML = `
    <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${type === 'success' ? 'bg-emerald-100 text-emerald-700' : (type === 'error' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700')}">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
