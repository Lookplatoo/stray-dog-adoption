// Client-Side Mock Database & API Engine for GitHub Pages (Option 1)
// Enables 100% full interactive functionality without any server needed!

const DB_KEY = 'stray_dog_adoption_db_v3';

// Initial Database Seed (D1 - D7)
function getInitialDB() {
  return {
    users: [
      { id: 1, user_code: 'U-001', username: 'somchai', password: 'password123', name: 'สมชาย ใจดี', phone: '081-234-5678', email: 'somchai@example.com', address: '123/45 ซอยพหลโยธิน 24 จตุจักร กทม.', role: 'adopter', status: 'active', housing_type: 'บ้านเดี่ยว / มีรั้วรอบขอบชิดปลอดภัย', experience: 'เคยเลี้ยงสุนัขมาก่อน' },
      { id: 2, user_code: 'S-001', username: 'porntip', password: 'password123', name: 'เจ้าหน้าที่พรทิพย์ แก้วใส', phone: '089-999-8888', email: 'porntip@shelter.org', address: 'ศูนย์พักพิงสัตว์จรจัด กรุงเทพฯ', role: 'staff', status: 'active' },
      { id: 3, user_code: 'A-001', username: 'admin', password: 'admin123', name: 'ผู้ดูแลระบบศูนย์พักพิง (Admin)', phone: '02-999-0000', email: 'admin@shelter.org', address: 'ศูนย์พักพิงสัตว์จรจัด กรุงเทพฯ', role: 'admin', status: 'active' }
    ],
    dogs: [
      { id: 'D-001', code: 'D-001', name: 'น้องข้าวเหนียว', breed: 'ผสมไทย', gender: 'เมีย', age: '1 ปี', color: 'สีขาว-น้ำตาล', health: 'ฉีดวัคซีนป้องกันพิษสุนัขบ้าและวัคซีนรวม 5 โรคครบถ้วน ทำหมันเรียบร้อย สุขภาพแข็งแรงสมบูรณ์', health_record: 'ฉีดวัคซีนป้องกันพิษสุนัขบ้าและวัคซีนรวม 5 โรคครบถ้วน ทำหมันเรียบร้อย สุขภาพแข็งแรงสมบูรณ์', vaccinated: 1, neutered: 1, image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop', image_url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' },
      { id: 'D-002', code: 'D-002', name: 'เจ้าชาโคล', breed: 'ไทยบางแก้ว', gender: 'ผู้', age: '2 ปี', color: 'สีดำ-ขาว', health: 'ตรวจสุขภาพประจำปีแล้ว ปลอดพยาธิหนอนหัวใจ ได้รับยาหยอดเห็บหมัดสม่ำเสมอ', health_record: 'ตรวจสุขภาพประจำปีแล้ว ปลอดพยาธิหนอนหัวใจ ได้รับยาหยอดเห็บหมัดสม่ำเสมอ', vaccinated: 1, neutered: 1, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop', image_url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' },
      { id: 'D-003', code: 'D-003', name: 'มะขาม', breed: 'ผสมโกลเด้น', gender: 'ผู้', age: '8 เดือน', color: 'สีทองอ่อน', health: 'ฉีดวัคซีนเข็มแรกแล้ว อยู่ระหว่างรอทำหมัน สุขภาพร่าเริง เข้ากับคนง่าย', health_record: 'ฉีดวัคซีนเข็มแรกแล้ว อยู่ระหว่างรอทำหมัน สุขภาพร่าเริง เข้ากับคนง่าย', vaccinated: 1, neutered: 0, image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop', image_url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' },
      { id: 'D-004', code: 'D-004', name: 'ถุงทอง', breed: 'ไทยหลังอาน', gender: 'เมีย', age: '3 ปี', color: 'สีแดงน้ำตาล', health: 'ทำหมันแล้ว ฉีดวัคซีนครบถ้วน มีสมุดตรวจสุขภาพประจำตัว สุขภาพดีเยี่ยม', health_record: 'ทำหมันแล้ว ฉีดวัคซีนครบถ้วน มีสมุดตรวจสุขภาพประจำตัว สุขภาพดีเยี่ยม', vaccinated: 1, neutered: 1, image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop', image_url: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' }
    ],
    applications: [],
    appointments: [],
    contracts: [],
    followups: [],
    criteria: {
      min_score: 70,
      min_age: 20
    },
    audit_logs: [
      { id: 1, actor_name: 'ระบบอัตโนมัติ', action: 'เริ่มต้นระบบ', details: 'เริ่มต้นระบบหาบ้านสุนัขจรจัด (Clean Slate)', timestamp: '2026-11-01 00:00:00', created_at: '2026-11-01 00:00:00' }
    ]
  };
}

// Storage Manager
function loadDB() {
  localStorage.removeItem('stray_dog_adoption_db_v1');
  localStorage.removeItem('stray_dog_adoption_db_v2');

  const data = localStorage.getItem(DB_KEY);
  if (!data) {
    const initial = getInitialDB();
    saveDB(initial);
    return initial;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    const initial = getInitialDB();
    saveDB(initial);
    return initial;
  }
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// Helper to delay simulation (feels realistic like a web app)
const sleep = (ms = 100) => new Promise(r => setTimeout(r, ms));

const api = {
  getToken: () => localStorage.getItem('auth_token'),
  setToken: (token) => localStorage.setItem('auth_token', token),
  clearToken: () => localStorage.removeItem('auth_token'),

  // Helper to log audit actions
  logAction(action) {
    try {
      const db = loadDB();
      const info = JSON.parse(localStorage.getItem('user_info') || '{}');
      const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
      const newLog = {
        id: (db.audit_logs || []).length + 1,
        actor_name: info.name || 'ผู้ใช้งานในระบบ',
        action: action,
        timestamp: nowStr
      };
      if (!db.audit_logs) db.audit_logs = [];
      db.audit_logs.unshift(newLog);
      saveDB(db);
    } catch (e) {
      console.warn('Log action error:', e);
    }
  },

  // Reset database back to seed defaults
  resetDatabase() {
    const initial = getInitialDB();
    saveDB(initial);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_info');
    return { success: true, message: 'รีเซ็ตฐานข้อมูลเริ่มต้นเรียบร้อยแล้ว' };
  },

  // 1. Auth Operations
  async login(payload) {
    await sleep(150);
    const db = loadDB();
    const username = (payload.username || payload.email || '').trim().toLowerCase();
    const password = payload.password || '';

    const user = db.users.find(u => 
      (u.username.toLowerCase() === username || u.email.toLowerCase() === username) && 
      u.password === password
    );

    if (!user) {
      throw new Error('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
    }

    if (user.status === 'suspended') {
      throw new Error('บัญชีผู้ใช้นี้ถูกระงับการใช้งานชั่วคราว');
    }

    const token = 'ghpages-token-' + btoa(JSON.stringify({ id: user.id, username: user.username, role: user.role }));
    this.setToken(token);
    localStorage.setItem('user_info', JSON.stringify(user));
    return { success: true, token, user };
  },

  async register(userData) {
    await sleep(150);
    const db = loadDB();
    const exists = db.users.find(u => u.username === userData.username || u.email === userData.email);
    if (exists) {
      throw new Error('ชื่อผู้ใช้หรืออีเมลนี้มีอยู่ในระบบแล้ว');
    }

    const newId = db.users.length + 1;
    const user = {
      id: newId,
      user_code: 'U-' + String(newId).padStart(3, '0'),
      username: userData.username,
      password: userData.password,
      name: userData.name,
      phone: userData.phone || '',
      email: userData.email,
      address: userData.address || '',
      housing_type: userData.housing_type || '',
      experience: userData.experience || '',
      role: 'adopter',
      status: 'active'
    };

    db.users.push(user);
    saveDB(db);

    const token = 'ghpages-token-' + btoa(JSON.stringify({ id: user.id, username: user.username, role: user.role }));
    this.setToken(token);
    localStorage.setItem('user_info', JSON.stringify(user));
    return { success: true, token, user };
  },

  async getProfile() {
    await sleep(50);
    const info = localStorage.getItem('user_info');
    if (!info) throw new Error('Not logged in');
    return { success: true, user: JSON.parse(info) };
  },

  // 2. Dogs Operations
  async getDogs(query = null) {
    await sleep(50);
    const db = loadDB();
    let list = db.dogs.map(d => ({
      ...d,
      code: d.code || d.id,
      image_url: d.image_url || d.image,
      health_record: d.health_record || d.health || 'สุขภาพแข็งแรง สมบูรณ์',
      vaccinated: d.vaccinated ?? 1,
      neutered: d.neutered ?? 1
    }));

    if (query && typeof query === 'string' && query.includes('=')) {
      try {
        const params = new URLSearchParams(query.startsWith('?') ? query : '?' + query);
        const breed = params.get('breed');
        const age = params.get('age');
        const gender = params.get('gender');
        if (breed && breed !== 'ทั้งหมด' && breed !== 'ทุกสายพันธุ์') {
          list = list.filter(d => d.breed && d.breed.includes(breed));
        }
        if (gender && gender !== 'ทั้งหมด' && gender !== 'ทุกเพศ') {
          list = list.filter(d => d.gender === gender);
        }
        if (age && age !== 'ทั้งหมด' && age !== 'ทุกช่วงอายุ') {
          if (age.includes('น้อยกว่า 1')) {
            list = list.filter(d => d.age && (d.age.includes('เดือน') || d.age === '1 ปี'));
          } else if (age.includes('1 - 3')) {
            list = list.filter(d => d.age && (d.age.includes('1 ปี') || d.age.includes('2 ปี') || d.age.includes('3 ปี')));
          } else if (age.includes('มากกว่า 3')) {
            list = list.filter(d => d.age && !d.age.includes('เดือน') && !d.age.includes('1 ปี') && !d.age.includes('2 ปี'));
          }
        }
      } catch (e) {
        console.warn('Filter dogs error:', e);
      }
    }

    return { success: true, dogs: list, data: list };
  },

  async getDogById(id) {
    await sleep(50);
    const db = loadDB();
    const dog = db.dogs.find(d => d.id === id);
    if (!dog) throw new Error('ไม่พบสุนัขรหัสนี้');
    const enriched = {
      ...dog,
      code: dog.code || dog.id,
      image_url: dog.image_url || dog.image,
      health_record: dog.health_record || dog.health || 'สุขภาพแข็งแรง สมบูรณ์',
      vaccinated: dog.vaccinated ?? 1,
      neutered: dog.neutered ?? 1
    };
    return { success: true, dog: enriched, data: enriched };
  },

  async addDog(data) {
    await sleep(100);
    const db = loadDB();
    const newId = data.code || ('D-' + String(db.dogs.length + 1).padStart(3, '0'));
    const img = data.image_url || data.image || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600';
    const newDog = {
      id: newId,
      code: newId,
      name: data.name,
      breed: data.breed,
      gender: data.gender,
      age: data.age,
      color: data.color || 'สีธรรมชาติ',
      health: data.health_record || data.health || 'สุขภาพแข็งแรง สมบูรณ์',
      health_record: data.health_record || data.health || 'สุขภาพแข็งแรง สมบูรณ์',
      vaccinated: data.vaccinated ? 1 : 0,
      neutered: data.neutered ? 1 : 0,
      image: img,
      image_url: img,
      status: data.status || 'พร้อมรับเลี้ยง'
    };
    db.dogs.unshift(newDog);
    saveDB(db);
    this.logAction(`ลงทะเบียนสุนัขใหม่ ${newDog.name} (${newDog.id})`);
    return { success: true, message: 'ลงทะเบียนสุนัขใหม่เรียบร้อยแล้ว', dog: newDog, data: newDog };
  },

  async updateDog(id, data) {
    await sleep(100);
    const db = loadDB();
    const idx = db.dogs.findIndex(d => d.id === id);
    if (idx === -1) throw new Error('ไม่พบสุนัขรหัสนี้');
    const img = data.image_url || data.image || db.dogs[idx].image;
    db.dogs[idx] = {
      ...db.dogs[idx],
      ...data,
      image: img,
      image_url: img,
      health: data.health_record || data.health || db.dogs[idx].health,
      health_record: data.health_record || data.health || db.dogs[idx].health_record
    };
    saveDB(db);
    this.logAction(`แก้ไขข้อมูลสุนัข ${db.dogs[idx].name} (${id})`);
    return { success: true, message: 'แก้ไขข้อมูลสุนัขเรียบร้อยแล้ว', dog: db.dogs[idx], data: db.dogs[idx] };
  },

  async updateDogStatus(id, status) {
    await sleep(100);
    const db = loadDB();
    const dog = db.dogs.find(d => d.id === id);
    if (!dog) throw new Error('ไม่พบสุนัขรหัสนี้');
    dog.status = status;
    saveDB(db);
    this.logAction(`ปรับสถานะสุนัข ${dog.name} (${id}) เป็น ${status}`);
    return { success: true, message: 'ปรับสถานะสุนัขเรียบร้อยแล้ว', dog, data: dog };
  },

  // 3. Applications Operations
  async getApplications() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.applications.map(a => {
      const user = db.users.find(u => u.id === a.user_id) || {};
      const dog = db.dogs.find(d => d.id === a.dog_id) || {};
      const isApproved = a.status === 'approved' || a.status === 'อนุมัติแล้ว';
      const isRejected = a.status === 'rejected' || a.status === 'ปฏิเสธแล้ว';
      const statusTh = isApproved ? 'อนุมัติแล้ว' : (isRejected ? 'ปฏิเสธแล้ว' : 'รอดำเนินการ');

      return {
        ...a,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        adopter_email: user.email || '-',
        adopter_address: user.address || '-',
        dog_name: dog.name || 'ไม่ระบุ',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        dog_status: dog.status || 'พร้อมรับเลี้ยง',
        income_bracket: a.financial_readiness || a.income_bracket || '-',
        pet_experience: a.experience || a.pet_experience || '-',
        family_members: a.family_members || '3',
        rejection_reason: a.reject_reason || a.rejection_reason || '',
        status: statusTh,
        raw_status: a.status
      };
    });
    return { success: true, applications: mapped, data: mapped };
  },

  async getAllApplications() {
    return this.getApplications();
  },

  async getMyApplications() {
    await sleep(80);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const myApps = db.applications.filter(a => a.user_id === info.id);
    const mapped = myApps.map(a => {
      const dog = db.dogs.find(d => d.id === a.dog_id) || {};
      const isApproved = a.status === 'approved' || a.status === 'อนุมัติแล้ว';
      const isRejected = a.status === 'rejected' || a.status === 'ปฏิเสธแล้ว';
      const statusTh = isApproved ? 'อนุมัติแล้ว' : (isRejected ? 'ปฏิเสธแล้ว' : 'รอดำเนินการ');

      return {
        ...a,
        dog_code: dog.id,
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        status: statusTh,
        raw_status: a.status
      };
    });
    return { success: true, applications: mapped, data: mapped };
  },

  async submitApplication(data) {
    await sleep(150);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const newId = 'APP-2026-' + String(db.applications.length + 1).padStart(3, '0');

    // Calculate score based on criteria
    let score = 0;
    if (data.housing_type && data.housing_type.includes('บ้านเดี่ยว')) score += 30;
    else if (data.housing_type && data.housing_type.includes('ทาวน์โฮม')) score += 20;
    else score += 10;

    if (data.financial_readiness && data.financial_readiness.includes('มากกว่า 30,000')) score += 25;
    else if (data.financial_readiness && data.financial_readiness.includes('15,000 - 30,000')) score += 20;
    else score += 10;

    if (data.experience && data.experience.includes('มากกว่า 3 ปี')) score += 20;
    else if (data.experience && data.experience.includes('1-3 ปี')) score += 18;
    else score += 15;

    score += 25; // Family consent score

    const app = {
      id: newId,
      dog_id: data.dog_id,
      user_id: info.id || 1,
      housing_type: data.housing_type,
      experience: data.experience,
      care_time: data.care_time || 'มีเวลาดูแลสม่ำเสมอทุกวัน',
      financial_readiness: data.financial_readiness,
      reason: data.reason || 'มีความพร้อมและยินยอมดูแลตามข้อตกลง',
      score: score,
      status: 'pending',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.applications.unshift(app);
    saveDB(db);

    const dog = db.dogs.find(d => d.id === data.dog_id);
    this.logAction(`ยื่นคำขอรับเลี้ยงสุนัข ${dog ? dog.name : data.dog_id} (${newId}) - คะแนนประเมิน ${score}/100`);

    return {
      success: true,
      message: 'ยื่นคำขอรับเลี้ยงสำเร็จ! เจ้าหน้าที่จะตรวจสอบตามเกณฑ์',
      applicationId: newId,
      application_id: newId,
      score: score,
      application: app,
      data: app
    };
  },

  async reviewApplication(id, status, reason = '') {
    await sleep(100);
    const db = loadDB();
    const app = db.applications.find(a => a.id === id);
    if (!app) throw new Error('ไม่พบคำขอรับเลี้ยงรหัสนี้');
    
    const isApproved = status === 'อนุมัติแล้ว' || status === 'approved';
    app.status = isApproved ? 'approved' : 'rejected';
    app.reject_reason = reason;
    app.rejection_reason = reason;
    saveDB(db);

    const dog = db.dogs.find(d => d.id === app.dog_id);
    this.logAction(`พิจารณาคำขอ ${id} (${dog ? dog.name : ''}) เป็น "${isApproved ? 'อนุมัติแล้ว' : 'ปฏิเสธแล้ว'}"`);

    return { success: true, message: `พิจารณาคำขอเป็น "${isApproved ? 'อนุมัติแล้ว' : 'ปฏิเสธแล้ว'}" เรียบร้อยแล้ว`, newStatus: status };
  },

  async updateAppStatus(id, status, reason = '') {
    return this.reviewApplication(id, status, reason);
  },

  // 4. Criteria Operations (Admin Only)
  async getCriteria() {
    await sleep(50);
    const db = loadDB();
    return { success: true, settings: db.criteria, data: db.criteria };
  },

  async updateCriteria(data) {
    await sleep(100);
    const db = loadDB();
    if (data.min_score !== undefined) db.criteria.min_score = parseInt(data.min_score);
    if (data.min_age !== undefined) db.criteria.min_age = parseInt(data.min_age);
    saveDB(db);
    this.logAction(`ตั้งค่าเกณฑ์คะแนนความพร้อมขั้นต่ำเป็น ${db.criteria.min_score} คะแนน`);
    return { success: true, message: 'บันทึกเกณฑ์การประเมินความพร้อมเรียบร้อยแล้ว' };
  },

  // 5. Appointments Operations
  async getAppointments() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.appointments.map(ap => {
      const user = db.users.find(u => u.id === ap.user_id) || {};
      const dog = db.dogs.find(d => d.id === ap.dog_id) || {};
      let statusTh = 'รอดำเนินการ';
      if (ap.status === 'confirmed') statusTh = 'ยืนยันนัดหมายแล้ว';
      else if (ap.status === 'completed') statusTh = 'ดำเนินการแล้ว';
      else if (ap.status === 'cancelled') statusTh = 'ยกเลิกแล้ว';

      return {
        ...ap,
        appointment_code: ap.id,
        appointment_date: ap.date,
        appointment_time: ap.time,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        adopter_email: user.email || '-',
        dog_name: dog.name || 'สุนัข',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        status: statusTh,
        raw_status: ap.status
      };
    });
    return { success: true, appointments: mapped, data: mapped };
  },

  async getAllAppointments() {
    return this.getAppointments();
  },

  async getMyAppointments() {
    await sleep(80);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const myAppts = db.appointments.filter(ap => ap.user_id === info.id);
    const mapped = myAppts.map(ap => {
      const dog = db.dogs.find(d => d.id === ap.dog_id) || {};
      let statusTh = 'รอดำเนินการ';
      if (ap.status === 'confirmed') statusTh = 'ยืนยันนัดหมายแล้ว';
      else if (ap.status === 'completed') statusTh = 'ดำเนินการแล้ว';
      else if (ap.status === 'cancelled') statusTh = 'ยกเลิกแล้ว';

      return {
        ...ap,
        appointment_code: ap.id,
        appointment_date: ap.date,
        appointment_time: ap.time,
        dog_name: dog.name || 'สุนัข',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        status: statusTh,
        raw_status: ap.status
      };
    });
    return { success: true, appointments: mapped, data: mapped };
  },

  async bookAppointment(data) {
    await sleep(150);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const newId = 'APT-2026-' + String(db.appointments.length + 1).padStart(3, '0');
    const apptDate = data.appointment_date || data.date;
    const apptTime = data.appointment_time || data.time;

    const appt = {
      id: newId,
      application_id: data.application_id,
      user_id: info.id || 1,
      dog_id: data.dog_id,
      appointment_type: data.appointment_type || 'สัมภาษณ์ดูตัวที่ศูนย์',
      date: apptDate,
      time: apptTime,
      status: 'confirmed',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.appointments.unshift(appt);
    saveDB(db);

    const dog = db.dogs.find(d => d.id === data.dog_id);
    this.logAction(`จองวันนัดหมายดูตัวสุนัข ${dog ? dog.name : data.dog_id} (${newId}) วันที่ ${apptDate}`);

    return {
      success: true,
      message: 'จองวันนัดหมายสำเร็จ! เจ้าหน้าที่ได้รับข้อมูลแล้ว',
      appointmentId: newId,
      appointment_id: newId,
      appointment_code: newId,
      appointment: appt,
      data: appt
    };
  },

  async updateAppointmentStatus(id, status, reason = '') {
    await sleep(100);
    const db = loadDB();
    const apt = db.appointments.find(a => a.id === id);
    if (!apt) throw new Error('ไม่พบนัดหมายรหัสนี้');
    
    let dbStatus = 'pending';
    if (status === 'ยืนยันแล้ว' || status === 'ยืนยันนัดหมายแล้ว' || status === 'confirmed') dbStatus = 'confirmed';
    else if (status === 'ดำเนินการแล้ว' || status === 'เสร็จสิ้น' || status === 'completed') dbStatus = 'completed';
    else if (status === 'ยกเลิกแล้ว' || status === 'ยกเลิก' || status === 'cancelled') dbStatus = 'cancelled';

    apt.status = dbStatus;
    saveDB(db);

    this.logAction(`ปรับสถานะนัดหมาย ${id} เป็น "${status}"`);
    return { success: true, message: `ปรับสถานะนัดหมายเป็น "${status}" เรียบร้อยแล้ว`, newStatus: status };
  },

  async remindAppointment(id) {
    await sleep(100);
    this.logAction(`ส่งแจ้งเตือนนัดหมาย ${id} ผ่านอีเมลจำลอง`);
    return { success: true, message: 'ส่งอีเมลแจ้งเตือนนัดหมายล่วงหน้าไปยังผู้ขอรับเลี้ยงสำเร็จ' };
  },

  // 6. Contracts Operations
  async getContracts() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.contracts.map(c => {
      const user = db.users.find(u => u.id === c.user_id) || {};
      const dog = db.dogs.find(d => d.id === c.dog_id) || {};
      const isSigned = c.signed === 1 || c.status === 'ลงนามแล้ว';
      return {
        ...c,
        contract_code: c.id,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        adopter_email: user.email || '-',
        adopter_address: user.address || '-',
        dog_name: dog.name || 'สุนัข',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_color: dog.color || 'สีธรรมชาติ',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        terms: c.stipulations,
        signed_name: c.signature_text || (isSigned ? user.name : ''),
        status: isSigned ? 'ลงนามแล้ว' : 'รอลงนาม',
        raw_status: c.status
      };
    });
    return { success: true, contracts: mapped, data: mapped };
  },

  async getAllContracts() {
    return this.getContracts();
  },

  async getMyContracts() {
    await sleep(80);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const myCtrs = db.contracts.filter(c => c.user_id === info.id);
    const mapped = myCtrs.map(c => {
      const dog = db.dogs.find(d => d.id === c.dog_id) || {};
      const isSigned = c.signed === 1 || c.status === 'ลงนามแล้ว';
      return {
        ...c,
        contract_code: c.id,
        adopter_name: info.name || 'ผู้รับเลี้ยง',
        adopter_phone: info.phone || '-',
        adopter_email: info.email || '-',
        adopter_address: info.address || '-',
        dog_name: dog.name || 'สุนัข',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_color: dog.color || 'สีธรรมชาติ',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        terms: c.stipulations,
        signed_name: c.signature_text || (isSigned ? info.name : ''),
        status: isSigned ? 'ลงนามแล้ว' : 'รอลงนาม',
        raw_status: c.status
      };
    });
    return { success: true, contracts: mapped, data: mapped };
  },

  async createContract(data) {
    await sleep(150);
    const db = loadDB();
    const app = db.applications.find(a => a.id === data.application_id);
    if (!app) throw new Error('ไม่พบคำขอรับเลี้ยงรหัสนี้');

    const newId = 'CTR-2026-' + String(db.contracts.length + 1).padStart(3, '0');
    const contract = {
      id: newId,
      application_id: data.application_id,
      user_id: app.user_id,
      dog_id: app.dog_id,
      contract_date: new Date().toISOString().substring(0, 10),
      stipulations: data.terms || data.stipulations || 'เลี้ยงดูระบบปิด มีรั้วรอบขอบชิด ฉีดวัคซีนสม่ำเสมอ ยินยอมให้เจ้าหน้าที่ติดตามผล',
      signed: 0,
      signature_text: '',
      signed_at: null,
      status: 'pending',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.contracts.unshift(contract);
    saveDB(db);

    const dog = db.dogs.find(d => d.id === app.dog_id);
    this.logAction(`จัดทำเอกสารสัญญา ${newId} สำหรับสุนัข ${dog ? dog.name : app.dog_id}`);

    return {
      success: true,
      message: `จัดทำเอกสารสัญญา ${newId} สำเร็จและส่งให้ผู้รับเลี้ยงลงนาม`,
      contractId: newId,
      contract_code: newId,
      data: contract
    };
  },

  async editContractTerms(id, stipulations) {
    await sleep(100);
    const db = loadDB();
    const ctr = db.contracts.find(c => c.id === id);
    if (!ctr) throw new Error('ไม่พบสัญญารหัสนี้');
    ctr.stipulations = stipulations;
    saveDB(db);
    this.logAction(`ปรับปรุงเงื่อนไขสัญญา ${id}`);
    return { success: true, message: 'บันทึกแก้ไขข้อกำหนดสัญญาเรียบร้อยแล้ว' };
  },

  async signContract(id, payload) {
    await sleep(150);
    const db = loadDB();
    const ctr = db.contracts.find(c => c.id === id);
    if (!ctr) throw new Error('ไม่พบสัญญารหัสนี้');
    
    const sig = typeof payload === 'object' ? (payload.signer_name || payload.signature_text || 'ผู้รับเลี้ยง') : (payload || 'ผู้รับเลี้ยง');
    ctr.signed = 1;
    ctr.signature_text = sig;
    ctr.signed_name = sig;
    ctr.signed_at = new Date().toISOString().replace('T', ' ').substring(0, 19);
    ctr.status = 'active';

    // Update dog status to adopted
    const dog = db.dogs.find(d => d.id === ctr.dog_id);
    if (dog) dog.status = 'ได้บ้านแล้ว';

    saveDB(db);
    this.logAction(`ลงนามสัญญา ${id} ดิจิทัลเรียบร้อย (สุนัข ${dog ? dog.name : ctr.dog_id})`);
    return { success: true, message: 'ลงนามในสัญญาการรับเลี้ยงเรียบร้อยแล้ว! ขอบคุณที่มอบบ้านใหม่ให้น้องสุนัข' };
  },

  // 7. Follow-ups Operations
  async getFollowups() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.followups.map(f => {
      const user = db.users.find(u => u.id === f.user_id) || {};
      const dog = db.dogs.find(d => d.id === f.dog_id) || {};
      return {
        ...f,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        dog_name: dog.name || 'สุนัข',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        report_interval: f.report_interval || 'รายงานผลหลังรับเลี้ยง',
        health_status: f.health_status || 'สุขภาพสมบูรณ์ดี',
        behavior_status: f.behavior_status || 'ปรับตัวเข้ากับบ้านได้ดี',
        status: f.staff_feedback ? 'ตรวจแล้ว' : 'รอการตรวจสอบ'
      };
    });
    return { success: true, followups: mapped, data: mapped };
  },

  async getAllFollowups() {
    return this.getFollowups();
  },

  async getMyFollowups() {
    await sleep(80);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');

    // 1. Get adopted dogs that have signed contracts for this user
    const adoptedDogs = [];
    const userContracts = db.contracts.filter(c => c.user_id === info.id && c.signed === 1);
    userContracts.forEach(c => {
      const dog = db.dogs.find(d => d.id === c.dog_id);
      if (dog && !adoptedDogs.find(ad => ad.id === dog.id)) {
        adoptedDogs.push({
          id: dog.id,
          dog_id: dog.id,
          name: dog.name,
          code: dog.id,
          breed: dog.breed,
          gender: dog.gender,
          age: dog.age,
          image_url: dog.image,
          dog_image: dog.image,
          contract_id: c.id,
          contract_date: c.contract_date
        });
      }
    });

    // 2. Get past follow-up reports submitted by this user
    const myFlws = db.followups.filter(f => f.user_id === info.id);
    const mappedFollowups = myFlws.map(f => {
      const dog = db.dogs.find(d => d.id === f.dog_id) || {};
      return {
        ...f,
        dog_name: dog.name || 'สุนัข',
        dog_code: dog.id,
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
        dog_image_url: dog.image || '',
        report_interval: f.report_interval || 'รายงานผลหลังรับเลี้ยง',
        health_status: f.health_status || 'สุขภาพสมบูรณ์ดี',
        behavior_status: f.behavior_status || 'ปรับตัวเข้ากับบ้านได้ดี',
        status: f.staff_feedback ? 'ตรวจแล้ว' : 'รอการตรวจสอบ'
      };
    });

    return {
      success: true,
      adoptedDogs,
      followups: mappedFollowups,
      data: {
        adopted_dogs: adoptedDogs,
        reports: mappedFollowups
      }
    };
  },

  async submitFollowup(data) {
    await sleep(150);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const newId = 'FLW-2026-' + String(db.followups.length + 1).padStart(3, '0');

    // Find contract for this dog and user
    const ctr = db.contracts.find(c => c.dog_id === data.dog_id && c.user_id === info.id) || {};

    const flw = {
      id: newId,
      contract_id: ctr.id || 'CTR-2026-001',
      dog_id: data.dog_id,
      user_id: info.id || 1,
      report_interval: data.report_interval || 'รายงานผลหลังรับเลี้ยง',
      health_status: data.health_status || 'สุขภาพสมบูรณ์ดี',
      behavior_status: data.behavior_status || 'ปรับตัวเข้ากับบ้านได้ดี',
      media_url: data.media_url || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600',
      notes: data.notes || '',
      staff_feedback: '',
      update_date: new Date().toISOString().substring(0, 10),
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.followups.unshift(flw);
    saveDB(db);

    const dog = db.dogs.find(d => d.id === data.dog_id);
    this.logAction(`ส่งรายงานติดตามผลสุนัข ${dog ? dog.name : data.dog_id} (${newId})`);

    return { success: true, message: 'ส่งรายงานติดตามผลสำเร็จ! เจ้าหน้าที่จะตรวจและให้คำแนะนำ', followup: flw, data: flw };
  },

  async sendFollowupFeedback(id, feedback) {
    await sleep(100);
    const db = loadDB();
    const flw = db.followups.find(f => f.id === id);
    if (!flw) throw new Error('ไม่พบรายงานติดตามผลนี้');
    flw.staff_feedback = feedback;
    flw.reviewed_at = new Date().toISOString().replace('T', ' ').substring(0, 19);
    saveDB(db);

    this.logAction(`บันทึกข้อเสนอแนะรายงานติดตามผล ${id}`);
    return { success: true, message: 'บันทึกข้อเสนอแนะและแจ้งเตือนผู้รับเลี้ยงเรียบร้อยแล้ว' };
  },

  async reviewFollowup(id, feedback) {
    return this.sendFollowupFeedback(id, feedback);
  },

  // 8. Users Operations (Admin Only)
  async getUsers() {
    await sleep(80);
    const db = loadDB();
    return { success: true, users: db.users, data: db.users };
  },

  async updateUserStatus(id, newStatus) {
    await sleep(100);
    const db = loadDB();
    const user = db.users.find(u => String(u.id) === String(id));
    if (!user) throw new Error('ไม่พบผู้ใช้นี้ในระบบ');
    user.status = newStatus;
    saveDB(db);

    const actionText = newStatus === 'active' ? 'เปิดใช้งาน' : 'ระงับบัญชี';
    this.logAction(`${actionText}ผู้ใช้ ${user.name} (${user.user_code || id})`);

    return { success: true, message: `เปลี่ยนสถานะบัญชีเป็น ${actionText} เรียบร้อยแล้ว`, newStatus };
  },

  // 9. Stats Operations
  async getStats() {
    await sleep(50);
    const db = loadDB();
    const totalDogs = db.dogs.length;
    const adoptedDogs = db.dogs.filter(d => d.status === 'ได้บ้านแล้ว' || d.status === 'รับเลี้ยงแล้ว').length;
    const availableDogs = db.dogs.filter(d => d.status === 'พร้อมรับเลี้ยง' || d.status === 'พร้อมหาบ้าน').length;
    const reservedDogs = db.dogs.filter(d => d.status === 'มีผู้จองแล้ว').length;
    const adoptionRate = totalDogs > 0 ? Math.round((adoptedDogs / totalDogs) * 100) : 0;

    const totalApps = db.applications.length;
    const approvedApps = db.applications.filter(a => a.status === 'approved' || a.status === 'อนุมัติแล้ว').length;
    const rejectedApps = db.applications.filter(a => a.status === 'rejected' || a.status === 'ปฏิเสธแล้ว').length;
    const pendingApps = db.applications.filter(a => a.status === 'pending' || a.status === 'รอดำเนินการ').length;

    const totalContracts = db.contracts.length;
    const signedContracts = db.contracts.filter(c => c.signed === 1 || c.status === 'active' || c.status === 'ลงนามแล้ว').length;

    const totalFollowups = db.followups.length;

    const stats = {
      total_dogs: totalDogs,
      totalDogs,
      adopted_dogs: adoptedDogs,
      adoptedDogs,
      available_dogs: availableDogs,
      availableDogs,
      reserved_dogs: reservedDogs,
      reservedDogs,
      medical_dogs: 0,
      medicalDogs: 0,
      adoptionRate,
      total_applications: totalApps,
      totalApps,
      approved_applications: approvedApps,
      approvedApps,
      rejected_applications: rejectedApps,
      rejectedApps,
      pending_applications: pendingApps,
      pendingApps,
      total_contracts: totalContracts,
      totalContracts,
      signed_contracts: signedContracts,
      signedContracts,
      total_followups: totalFollowups,
      totalFollowups
    };
    return { success: true, stats, data: stats };
  },

  async getAuditLogs() {
    await sleep(50);
    const db = loadDB();
    const mapped = (db.audit_logs || []).map(l => ({
      ...l,
      created_at: l.timestamp || l.created_at,
      user_name: l.actor_name || l.user_name || 'ระบบอัตโนมัติ',
      details: l.action || l.details
    }));
    return { success: true, logs: mapped, data: mapped };
  }
};

window.api = api;
window.API = api;
