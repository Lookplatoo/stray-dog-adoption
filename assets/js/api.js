// Client-Side Mock Database & API Engine for GitHub Pages (Option 1)
// Enables 100% full interactive functionality without any server needed!

const DB_KEY = 'stray_dog_adoption_db';

// Initial Database Seed (D1 - D7)
function getInitialDB() {
  return {
    users: [
      { id: 1, user_code: 'U-001', username: 'somchai', password: 'password123', name: 'สมชาย ใจดี', phone: '081-234-5678', email: 'somchai@example.com', address: '123/45 ซอยพหลโยธิน 24 จตุจักร กทม.', role: 'adopter', status: 'active', housing_type: 'บ้านเดี่ยว / มีรั้วรอบขอบชิดปลอดภัย', experience: 'เคยเลี้ยงสุนัขมาก่อน' },
      { id: 2, user_code: 'S-001', username: 'porntip', password: 'password123', name: 'เจ้าหน้าที่พรทิพย์ แก้วใส', phone: '089-999-8888', email: 'porntip@shelter.org', address: 'ศูนย์พักพิงสัตว์จรจัด กรุงเทพฯ', role: 'staff', status: 'active' },
      { id: 3, user_code: 'A-001', username: 'admin', password: 'admin123', name: 'ผู้ดูแลระบบศูนย์พักพิง (Admin)', phone: '02-999-0000', email: 'admin@shelter.org', address: 'ศูนย์พักพิงสัตว์จรจัด กรุงเทพฯ', role: 'admin', status: 'active' }
    ],
    dogs: [
      { id: 'D-001', name: 'น้องข้าวเหนียว', breed: 'ผสมไทย', gender: 'เมีย', age: '1 ปี', health: 'ฉีดวัคซีนป้องกันพิษสุนัขบ้าและวัคซีนรวม 5 โรคครบถ้วน ทำหมันเรียบร้อย สุขภาพแข็งแรงสมบูรณ์', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' },
      { id: 'D-002', name: 'เจ้าชาโคล', breed: 'ไทยบางแก้ว', gender: 'ผู้', age: '2 ปี', health: 'ตรวจสุขภาพประจำปีแล้ว ปลอดพยาธิหนอนหัวใจ ได้รับยาหยอดเห็บหมัดสม่ำเสมอ', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' },
      { id: 'D-003', name: 'มะขาม', breed: 'ผสมโกลเด้น', gender: 'ผู้', age: '8 เดือน', health: 'ฉีดวัคซีนเข็มแรกแล้ว อยู่ระหว่างรอทำหมัน สุขภาพร่าเริง เข้ากับคนง่าย', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop', status: 'พร้อมรับเลี้ยง' },
      { id: 'D-004', name: 'ถุงทอง', breed: 'ไทยหลังอาน', gender: 'เมีย', age: '3 ปี', health: 'ทำหมันแล้ว ฉีดวัคซีนครบถ้วน มีสมุดตรวจสุขภาพประจำตัว สุขภาพดีเยี่ยม', image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop', status: 'ได้บ้านแล้ว' }
    ],
    applications: [
      { id: 'APP-2026-001', dog_id: 'D-004', user_id: 1, housing_type: 'บ้านเดี่ยว / มีรั้วรอบขอบชิดปลอดภัย', experience: 'เคยเลี้ยงสุนัขมาก่อน เข้าใจพฤติกรรมและการดูแล', care_time: 'มีเวลาดูแลสม่ำเสมอทุกวัน / มีคนอยู่บ้าน', financial_readiness: 'พร้อมรับผิดชอบค่าอาหาร วัคซีน และค่ารักษาพยาบาลยามเจ็บป่วย', reason: 'รับเลี้ยงน้องถุงทอง ดูแลเป็นอย่างดี', score: 98, status: 'approved', created_at: '2026-10-15 10:00:00' },
      { id: 'APP-2026-002', dog_id: 'D-001', user_id: 1, housing_type: 'บ้านเดี่ยว / มีรั้วรอบขอบชิดปลอดภัย', experience: 'เคยเลี้ยงสุนัขมาก่อน เข้าใจพฤติกรรมและการดูแล', care_time: 'มีเวลาดูแลสม่ำเสมอทุกวัน / มีคนอยู่บ้าน', financial_readiness: 'พร้อมรับผิดชอบค่าอาหาร วัคซีน และค่ารักษาพยาบาลยามเจ็บป่วย', reason: 'มีบ้านเดี่ยวพร้อมสนามหญ้า มีเวลาดูแลและต้องการน้องสุนัขมาเป็นสมาชิกใหม่ในครอบครัว', score: 95, status: 'approved', created_at: '2026-11-05 14:30:00' }
    ],
    appointments: [
      { id: 'APT-2026-001', application_id: 'APP-2026-001', user_id: 1, dog_id: 'D-004', appointment_type: 'สัมภาษณ์ดูตัวที่ศูนย์', date: '2026-10-20', time: '10:30', status: 'completed', created_at: '2026-10-16 11:00:00' },
      { id: 'APT-2026-002', application_id: 'APP-2026-002', user_id: 1, dog_id: 'D-001', appointment_type: 'สัมภาษณ์ดูตัวที่ศูนย์', date: '2026-11-10', time: '13:00', status: 'confirmed', created_at: '2026-11-05 15:00:00' }
    ],
    contracts: [
      { id: 'CTR-2026-001', application_id: 'APP-2026-001', user_id: 1, dog_id: 'D-004', contract_date: '2026-10-20', stipulations: 'เลี้ยงดูระบบปิด มีรั้วรอบขอบชิด ฉีดวัคซีนสม่ำเสมอ ยินยอมให้เจ้าหน้าที่ติดตามผล', signed: 1, signature_text: 'สมชาย ใจดี', signed_at: '2026-10-20 11:30:00', status: 'active', created_at: '2026-10-20 11:00:00' }
    ],
    followups: [
      { id: 'FLW-2026-001', contract_id: 'CTR-2026-001', dog_id: 'D-004', user_id: 1, update_date: '2026-11-01', media_url: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600', notes: 'น้องถุงทองปรับตัวได้ดีมาก กินอาหารเม็ดได้ตามปกติ ร่าเริง วิ่งเล่นในสนามหญ้าทุกเย็น ขนสวยและสุขภาพดีครับ', staff_feedback: 'ขอบคุณที่ดูแลน้องถุงทองเป็นอย่างดี สุขภาพดูสดใสแข็งแรงมากครับ ทางศูนย์ขอแสดงความยินดีด้วยครับ', reviewed_at: '2026-11-01T16:30:00', created_at: '2026-11-01 16:00:00' }
    ],
    criteria: {
      min_score: 70,
      min_age: 20
    },
    audit_logs: [
      { id: 1, actor_name: 'เจ้าหน้าที่พรทิพย์ แก้วใส', action: 'ยืนยันอนุมัตินัดหมายดูตัวสุนัข (APT-2026-002)', timestamp: '2026-11-05 15:05' },
      { id: 2, actor_name: 'เจ้าหน้าที่พรทิพย์ แก้วใส', action: 'อนุมัติคำขอรับเลี้ยง APP-2026-002 (น้องข้าวเหนียว)', timestamp: '2026-11-05 14:45' },
      { id: 3, actor_name: 'เจ้าหน้าที่พรทิพย์ แก้วใส', action: 'บันทึกข้อเสนอแนะรายงานติดตามผล FLW-2026-001', timestamp: '2026-11-01 16:30' },
      { id: 4, actor_name: 'ผู้ดูแลระบบศูนย์พักพิง (Admin)', action: 'ตั้งค่าเกณฑ์คะแนนความพร้อมขั้นต่ำเป็น 70 คะแนน', timestamp: '2026-10-15 09:00' }
    ]
  };
}

// Storage Manager
function loadDB() {
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
  async getDogs() {
    await sleep(50);
    const db = loadDB();
    return { success: true, dogs: db.dogs, data: db.dogs };
  },

  async getDogById(id) {
    await sleep(50);
    const db = loadDB();
    const dog = db.dogs.find(d => d.id === id);
    if (!dog) throw new Error('ไม่พบสุนัขรหัสนี้');
    return { success: true, dog, data: dog };
  },

  async addDog(data) {
    await sleep(100);
    const db = loadDB();
    const newId = 'D-' + String(db.dogs.length + 1).padStart(3, '0');
    const newDog = {
      id: data.id || newId,
      name: data.name,
      breed: data.breed,
      gender: data.gender,
      age: data.age,
      health: data.health || 'สุขภาพแข็งแรง สมบูรณ์',
      image: data.image || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600',
      status: data.status || 'พร้อมรับเลี้ยง'
    };
    db.dogs.push(newDog);
    saveDB(db);
    return { success: true, message: 'ลงทะเบียนสุนัขใหม่เรียบร้อยแล้ว', dog: newDog };
  },

  async updateDog(id, data) {
    await sleep(100);
    const db = loadDB();
    const idx = db.dogs.findIndex(d => d.id === id);
    if (idx === -1) throw new Error('ไม่พบสุนัขรหัสนี้');
    db.dogs[idx] = { ...db.dogs[idx], ...data };
    saveDB(db);
    return { success: true, message: 'แก้ไขข้อมูลสุนัขเรียบร้อยแล้ว', dog: db.dogs[idx] };
  },

  async updateDogStatus(id, status) {
    await sleep(100);
    const db = loadDB();
    const dog = db.dogs.find(d => d.id === id);
    if (!dog) throw new Error('ไม่พบสุนัขรหัสนี้');
    dog.status = status;
    saveDB(db);
    return { success: true, message: 'ปรับสถานะสุนัขเรียบร้อยแล้ว', dog };
  },

  // 3. Applications Operations
  async getApplications() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.applications.map(a => {
      const user = db.users.find(u => u.id === a.user_id) || {};
      const dog = db.dogs.find(d => d.id === a.dog_id) || {};
      return {
        ...a,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        adopter_email: user.email || '-',
        adopter_address: user.address || '-',
        dog_name: dog.name || 'ไม่ระบุ',
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_image: dog.image || '',
        dog_status: dog.status || 'พร้อมรับเลี้ยง',
        status: a.status === 'approved' ? 'อนุมัติแล้ว' : a.status === 'rejected' ? 'ปฏิเสธแล้ว' : 'รอการตรวจสอบ'
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
      return {
        ...a,
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
        status: a.status === 'approved' ? 'อนุมัติแล้ว' : a.status === 'rejected' ? 'ปฏิเสธแล้ว' : 'รอการตรวจสอบ'
      };
    });
    return { success: true, applications: mapped, data: mapped };
  },

  async submitApplication(data) {
    await sleep(150);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const newId = 'APP-2026-' + String(db.applications.length + 1).padStart(3, '0');

    // Calculate score
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

    score += 25; // Consent score

    const app = {
      id: newId,
      dog_id: data.dog_id,
      user_id: info.id || 1,
      housing_type: data.housing_type,
      experience: data.experience,
      care_time: data.care_time,
      financial_readiness: data.financial_readiness,
      reason: data.reason,
      score: score,
      status: 'pending',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.applications.unshift(app);
    saveDB(db);

    return { success: true, message: 'ยื่นคำขอรับเลี้ยงสำเร็จ! เจ้าหน้าที่จะตรวจสอบตามเกณฑ์', application: app };
  },

  async reviewApplication(id, status, reason = '') {
    await sleep(100);
    const db = loadDB();
    const app = db.applications.find(a => a.id === id);
    if (!app) throw new Error('ไม่พบคำขอรับเลี้ยงรหัสนี้');
    
    app.status = (status === 'อนุมัติแล้ว' || status === 'approved') ? 'approved' : 'rejected';
    app.reject_reason = reason;
    saveDB(db);

    return { success: true, message: `พิจารณาคำขอเป็น "${status}" เรียบร้อยแล้ว`, newStatus: status };
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
    if (data.min_score) db.criteria.min_score = parseInt(data.min_score);
    if (data.min_age) db.criteria.min_age = parseInt(data.min_age);
    saveDB(db);
    return { success: true, message: 'บันทึกเกณฑ์การประเมินความพร้อมเรียบร้อยแล้ว' };
  },

  // 5. Appointments Operations
  async getAppointments() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.appointments.map(ap => {
      const user = db.users.find(u => u.id === ap.user_id) || {};
      const dog = db.dogs.find(d => d.id === ap.dog_id) || {};
      return {
        ...ap,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        adopter_email: user.email || '-',
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
        status: ap.status === 'confirmed' ? 'ยืนยันแล้ว' : ap.status === 'completed' ? 'ดำเนินการแล้ว' : ap.status === 'cancelled' ? 'ยกเลิกแล้ว' : 'รอยืนยัน'
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
      return {
        ...ap,
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
        status: ap.status === 'confirmed' ? 'ยืนยันแล้ว' : ap.status === 'completed' ? 'ดำเนินการแล้ว' : ap.status === 'cancelled' ? 'ยกเลิกแล้ว' : 'รอยืนยัน'
      };
    });
    return { success: true, appointments: mapped, data: mapped };
  },

  async bookAppointment(data) {
    await sleep(150);
    const db = loadDB();
    const info = JSON.parse(localStorage.getItem('user_info') || '{}');
    const newId = 'APT-2026-' + String(db.appointments.length + 1).padStart(3, '0');

    const appt = {
      id: newId,
      application_id: data.application_id,
      user_id: info.id || 1,
      dog_id: data.dog_id,
      appointment_type: data.appointment_type || 'สัมภาษณ์ดูตัวที่ศูนย์',
      date: data.date,
      time: data.time,
      status: 'confirmed',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.appointments.unshift(appt);
    saveDB(db);

    return { success: true, message: 'จองวันนัดหมายสำเร็จ! เจ้าหน้าที่ได้รับข้อมูลแล้ว', appointment: appt };
  },

  async updateAppointmentStatus(id, status) {
    await sleep(100);
    const db = loadDB();
    const apt = db.appointments.find(a => a.id === id);
    if (!apt) throw new Error('ไม่พบนัดหมายรหัสนี้');
    
    let dbStatus = 'pending';
    if (status === 'ยืนยันแล้ว' || status === 'confirmed') dbStatus = 'confirmed';
    else if (status === 'ดำเนินการแล้ว' || status === 'completed') dbStatus = 'completed';
    else if (status === 'ยกเลิกแล้ว' || status === 'cancelled') dbStatus = 'cancelled';

    apt.status = dbStatus;
    saveDB(db);

    return { success: true, message: `ปรับสถานะนัดหมายเป็น "${status}" เรียบร้อยแล้ว`, newStatus: status };
  },

  async remindAppointment(id) {
    await sleep(100);
    return { success: true, message: 'ส่งอีเมลแจ้งเตือนนัดหมายล่วงหน้าไปยังผู้ขอรับเลี้ยงสำเร็จ' };
  },

  // 6. Contracts Operations
  async getContracts() {
    await sleep(80);
    const db = loadDB();
    const mapped = db.contracts.map(c => {
      const user = db.users.find(u => u.id === c.user_id) || {};
      const dog = db.dogs.find(d => d.id === c.dog_id) || {};
      return {
        ...c,
        adopter_name: user.name || 'ไม่ระบุ',
        adopter_code: user.user_code || 'U-001',
        adopter_phone: user.phone || '-',
        adopter_email: user.email || '-',
        adopter_address: user.address || '-',
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_age: dog.age || '-',
        dog_image: dog.image || '',
        status: c.signed ? 'ลงนามแล้ว' : 'รอลงนาม'
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
      return {
        ...c,
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_gender: dog.gender || '-',
        dog_image: dog.image || '',
        status: c.signed ? 'ลงนามแล้ว' : 'รอลงนาม'
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
      stipulations: data.stipulations || 'เลี้ยงดูระบบปิด มีรั้วรอบขอบชิด ฉีดวัคซีนสม่ำเสมอ ยินยอมให้เจ้าหน้าที่ติดตามผล',
      signed: 0,
      signature_text: '',
      signed_at: null,
      status: 'pending',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.contracts.unshift(contract);
    saveDB(db);

    return { success: true, message: `จัดทำเอกสารสัญญา ${newId} สำเร็จ`, contractId: newId };
  },

  async editContractTerms(id, stipulations) {
    await sleep(100);
    const db = loadDB();
    const ctr = db.contracts.find(c => c.id === id);
    if (!ctr) throw new Error('ไม่พบสัญญารหัสนี้');
    ctr.stipulations = stipulations;
    saveDB(db);
    return { success: true, message: 'บันทึกแก้ไขข้อกำหนดสัญญาเรียบร้อยแล้ว' };
  },

  async signContract(id, payload) {
    await sleep(150);
    const db = loadDB();
    const ctr = db.contracts.find(c => c.id === id);
    if (!ctr) throw new Error('ไม่พบสัญญารหัสนี้');
    
    const sig = typeof payload === 'object' ? payload.signature_text : payload;
    ctr.signed = 1;
    ctr.signature_text = sig;
    ctr.signed_at = new Date().toISOString().replace('T', ' ').substring(0, 19);
    ctr.status = 'active';

    // Update dog status to adopted
    const dog = db.dogs.find(d => d.id === ctr.dog_id);
    if (dog) dog.status = 'ได้บ้านแล้ว';

    saveDB(db);
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
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
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
    const myFlws = db.followups.filter(f => f.user_id === info.id);
    const mapped = myFlws.map(f => {
      const dog = db.dogs.find(d => d.id === f.dog_id) || {};
      return {
        ...f,
        dog_name: dog.name || 'สุนัข',
        dog_breed: dog.breed || '-',
        dog_image: dog.image || '',
        status: f.staff_feedback ? 'ตรวจแล้ว' : 'รอการตรวจสอบ'
      };
    });
    return { success: true, followups: mapped, data: mapped };
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
      update_date: new Date().toISOString().substring(0, 10),
      media_url: data.media_url || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600',
      notes: data.notes || '',
      staff_feedback: '',
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    db.followups.unshift(flw);
    saveDB(db);

    return { success: true, message: 'ส่งรายงานติดตามผลสำเร็จ! เจ้าหน้าที่จะตรวจและให้คำแนะนำ', followup: flw };
  },

  async sendFollowupFeedback(id, feedback) {
    await sleep(100);
    const db = loadDB();
    const flw = db.followups.find(f => f.id === id);
    if (!flw) throw new Error('ไม่พบรายงานติดตามผลนี้');
    flw.staff_feedback = feedback;
    flw.reviewed_at = new Date().toISOString();
    saveDB(db);
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
    return { success: true, message: `เปลี่ยนสถานะบัญชีเป็น ${newStatus} เรียบร้อยแล้ว`, newStatus };
  },

  // 9. Stats Operations
  async getStats() {
    await sleep(50);
    const db = loadDB();
    const totalDogs = db.dogs.length;
    const adoptedDogs = db.dogs.filter(d => d.status === 'ได้บ้านแล้ว').length;
    const availableDogs = db.dogs.filter(d => d.status === 'พร้อมรับเลี้ยง').length;
    const adoptionRate = totalDogs > 0 ? Math.round((adoptedDogs / totalDogs) * 100) : 0;

    const stats = {
      total_dogs: totalDogs,
      totalDogs,
      adopted_dogs: adoptedDogs,
      adoptedDogs,
      available_dogs: availableDogs,
      availableDogs,
      medical_dogs: 0,
      medicalDogs: 0,
      adoptionRate,
      total_applications: db.applications.length,
      totalApps: db.applications.length,
      approved_applications: db.applications.filter(a => a.status === 'approved').length,
      approvedApps: db.applications.filter(a => a.status === 'approved').length,
      pendingApps: db.applications.filter(a => a.status === 'pending').length,
      total_contracts: db.contracts.length,
      totalContracts: db.contracts.length,
      signed_contracts: db.contracts.filter(c => c.signed === 1).length,
      signedContracts: db.contracts.filter(c => c.signed === 1).length,
      total_followups: db.followups.length,
      totalFollowups: db.followups.length
    };
    return { success: true, stats, data: stats };
  },

  async getAuditLogs() {
    await sleep(50);
    const db = loadDB();
    const mapped = (db.audit_logs || []).map(l => ({
      ...l,
      created_at: l.timestamp,
      user_name: l.actor_name,
      details: l.action
    }));
    return { success: true, logs: mapped, data: mapped };
  }
};

window.api = api;
window.API = api;
