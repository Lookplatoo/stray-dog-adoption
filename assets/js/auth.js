let currentUser = null;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getAppPath(target) {
  const inStaff = window.location.pathname.includes('/staff/');
  if (target.startsWith('/staff/')) {
    return inStaff ? '.' + target.replace('/staff', '') : '.' + target;
  }
  if (target.startsWith('/')) {
    return inStaff ? '..' + target : '.' + target;
  }
  return target;
}

async function checkAuth(requiredRoles = null) {
  const token = api.getToken();

  if (token) {
    try {
      const res = await api.getProfile();
      currentUser = res.user;
    } catch (e) {
      console.warn('Session expired or invalid:', e);
      api.clearToken();
      currentUser = null;
    }
  } else {
    currentUser = null;
  }

  // Check required roles
  if (requiredRoles && requiredRoles.length > 0) {
    if (!currentUser) {
      if (typeof showToast === 'function') {
        showToast('กรุณาเข้าสู่ระบบก่อนทำรายการ', 'info');
      }
      setTimeout(() => {
        window.location.href = getAppPath('/login.html');
      }, 350);
      return false;
    }

    if (!requiredRoles.includes(currentUser.role)) {
      if (typeof showToast === 'function') {
        const roleLabel = requiredRoles.includes('admin') ? 'ผู้ดูแลระบบ' : 'เจ้าหน้าที่';
        showToast(`สิทธิ์การเข้าถึงสำหรับ ${roleLabel} เท่านั้น`, 'error');
      }
      setTimeout(() => {
        if (currentUser.role === 'adopter') window.location.href = getAppPath('/index.html');
        else if (currentUser.role === 'admin') window.location.href = getAppPath('/staff/users.html');
        else window.location.href = getAppPath('/staff/index.html');
      }, 700);
      return false;
    }
  }

  // Render Dynamic Navbars
  renderDynamicNavbar();
  renderStaffHeader();
  enforceRoleElements();

  return true;
}

// Wrapper alias for staff pages
async function requireRole(roles) {
  return await checkAuth(roles);
}

function saveAuthSession(token, user) {
  api.setToken(token);
  currentUser = user;
  renderDynamicNavbar();
  renderStaffHeader();
  enforceRoleElements();
}

function logout() {
  api.clearToken();
  currentUser = null;
  if (typeof showToast === 'function') {
    showToast('ออกจากระบบเรียบร้อยแล้ว', 'info');
  }
  setTimeout(() => {
    window.location.href = getAppPath('/login.html');
  }, 400);
}

// Dynamic header for adopter/public pages
function renderDynamicNavbar() {
  const container = document.getElementById('navbar-auth-actions');
  if (!container) return;

  if (currentUser) {
    let roleBadge = '';
    if (currentUser.role === 'admin') {
      roleBadge = '<span class="text-[10px] bg-purple-100 text-purple-800 font-medium px-2 py-0.5 rounded-full">แอดมิน</span>';
    } else if (currentUser.role === 'staff') {
      roleBadge = '<span class="text-[10px] bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded-full">เจ้าหน้าที่</span>';
    } else {
      roleBadge = '<span class="text-[10px] bg-zinc-200 text-zinc-700 font-medium px-2 py-0.5 rounded-full">ผู้รับเลี้ยง</span>';
    }

    container.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-xs font-medium text-zinc-800 border border-zinc-200/60">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span id="user-display-name" class="font-medium">${escapeHtml(currentUser.name || currentUser.username)}</span>
          ${roleBadge}
        </div>
        ${currentUser.role === 'admin' ? `
          <a href="${getAppPath('/staff/users.html')}" class="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition-colors shadow-2xs">
            <span>🛡️ ระบบผู้ดูแล</span>
            <span class="text-purple-300">→</span>
          </a>
        ` : currentUser.role === 'staff' ? `
          <a href="${getAppPath('/staff/index.html')}" class="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-2xs">
            <span>🧑‍💼 ระบบเจ้าหน้าที่</span>
            <span class="text-zinc-400">→</span>
          </a>
        ` : ''}
        <button onclick="logout()" class="text-xs font-medium text-zinc-500 hover:text-rose-600 px-2.5 py-1.5 rounded-lg transition-colors">
          ออกจากระบบ
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="flex items-center gap-2">
        <a href="${getAppPath('/login.html')}" class="text-xs font-medium text-zinc-700 hover:text-zinc-900 px-3 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors">
          เข้าสู่ระบบ
        </a>
        <a href="${getAppPath('/register.html')}" class="text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3.5 py-1.5 rounded-xl transition-colors shadow-2xs">
          สมัครสมาชิก
        </a>
      </div>
    `;
  }
}

// Dynamic header for staff/admin console
function renderStaffHeader() {
  const container = document.getElementById('staff-auth-actions');
  if (!container) return;

  if (currentUser) {
    let roleBadge = '';
    if (currentUser.role === 'admin') {
      roleBadge = '<span class="text-[10px] bg-purple-500/20 text-purple-300 font-semibold px-2 py-0.5 rounded-full border border-purple-500/30">แอดมิน</span>';
    } else {
      roleBadge = '<span class="text-[10px] bg-blue-500/20 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/30">เจ้าหน้าที่</span>';
    }

    container.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-xs text-zinc-200 border border-zinc-700">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span id="user-display-name">${escapeHtml(currentUser.name || currentUser.username)}</span>
          ${roleBadge}
        </div>
        <a href="${getAppPath('/index.html')}" class="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
          <span>← หน้าผู้ใช้ทั่วไป</span>
        </a>
        <button onclick="logout()" class="text-xs text-zinc-400 hover:text-rose-400 px-2 py-1 rounded transition-colors">
          ออกจากระบบ
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="flex items-center gap-2">
        <a href="${getAppPath('/login.html')}" class="text-xs text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
          เข้าสู่ระบบ
        </a>
      </div>
    `;
  }
}

// Show/hide elements that require specific roles (e.g. admin-only menu items)
function enforceRoleElements() {
  const adminElements = document.querySelectorAll('.nav-admin-only');
  adminElements.forEach(el => {
    if (currentUser && currentUser.role === 'admin') {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  const staffElements = document.querySelectorAll('.nav-staff-only');
  staffElements.forEach(el => {
    if (currentUser && currentUser.role === 'staff') {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  const badgeName = document.getElementById('user-display-name');
  if (badgeName && currentUser) {
    badgeName.textContent = currentUser.name || currentUser.username;
  }
}

// Auto checkAuth on DOMContentLoaded unless flagged
window.addEventListener('DOMContentLoaded', () => {
  if (!window.hasCustomAuthInit) {
    checkAuth();
  }
});
