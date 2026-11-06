// External Email Service Notification helper
// In Context Diagram, Email Service Provider is an external system, not an in-portal inbox.
function openInboxModal() {
  console.log('Email Service Provider operates externally.');
}

function closeInboxModal() {
  const modal = document.getElementById('inbox-modal');
  if (modal) modal.remove();
}

function updateInboxBadge() {
  // External service - badge removed
}
