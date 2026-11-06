# ระบบหาบ้านและคัดกรองเจ้าของให้สุนัขจรจัด (GitHub Pages Standalone Edition)

โฟลเดอร์นี้ได้รับการออกแบบมาเป็นพิเศษสำหรับ **นำขึ้น GitHub และเปิดใช้งานบน GitHub Pages (`github.io`) ได้ทันที 100%** โดยไม่ต้องติดตั้งหรือเปิดรัน Node.js Server หลังบ้าน 

ระบบมี **Client-Side Mock Database & Engine** ทำงานผ่าน `localStorage` ในตัว:
- บันทึกข้อมูลเริ่มต้นครบถ้วนตามฐานข้อมูล (สุนัข 4 ตัว, บัญชีผู้ใช้ 3 บทบาท, คำขอ, นัดหมาย, สัญญา, ติดตามผล, เกณฑ์คะแนน)
- ทุกปุ่มและทุกขั้นตอนทำงานได้จริงแบบ Interactive (เข้าสู่ระบบ, ยื่นคำขอ, คำนวณคะแนน, เจ้าหน้าที่คัดกรอง, นัดหมาย, เซ็นสัญญาดิจิทัล, ส่งผลตรวจ, แอดมินจัดการบัญชีและตั้งเกณฑ์)
- รองรับ Relative Path ทุกระดับ URL Subpath ของ GitHub Pages (`https://<username>.github.io/<repo-name>/`)

---

## บัญชีทดสอบสำหรับเข้าสู่ระบบ (Demo Accounts)
| บทบาท (Role) | Username | Password | สิทธิ์และหน้าที่ |
| :--- | :---: | :---: | :--- |
| **🛡️ ผู้ดูแลระบบ (Admin)** | `admin` | `admin123` | จัดการบัญชีผู้ใช้ (ระงับ/เปิดใช้งาน), ตั้งค่าแบบฟอร์มและเกณฑ์คะแนน |
| **🧑‍💼 เจ้าหน้าที่ (Staff)** | `porntip` | `password123` | คัดกรองคำขอ, นัดหมาย, สัญญาการรับเลี้ยง, ตรวจติดตามผล, ข้อมูลสุนัข, รายงานสถิติ |
| **👤 ผู้ขอรับเลี้ยง (Adopter)** | `somchai` | `password123` | ดูข้อมูลสุนัข, ยื่นคำขอรับเลี้ยง, จองนัดหมายดูตัว, ลงนามสัญญาดิจิทัล, ส่งรายงาน |

---

## ขั้นตอนการนำโฟลเดอร์นี้ขึ้น GitHub Pages ทีละขั้นตอน

### ขั้นตอนที่ 1: สร้าง Repository บนเว็บไซต์ GitHub
1. เข้าไปที่ [GitHub.com](https://github.com) แล้วเข้าสู่ระบบ
2. กดปุ่ม **New** (สีเขียว) เพื่อสร้าง Repository ใหม่
3. ตั้งชื่อ Repository เช่น: `stray-dog-adoption`
4. เลือกเป็น **Public**
5. **ไม่ต้อง** ติ๊กถูกที่ "Add a README file" (เพราะเรามีไฟล์พร้อมแล้ว)
6. กด **Create repository**

---

### ขั้นตอนที่ 2: อัปโหลดโค้ดขึ้น GitHub จากเครื่องของท่าน

เปิดโปรแกรม **Terminal** (Mac) และพิมพ์คำสั่งตามลำดับดังนี้:

```bash
# 1. ย้ายเข้าไปที่โฟลเดอร์ github_pages
cd /Users/lookplatoo/Documents/antigravity/excited-lovelace/github_pages

# 2. เริ่มต้น Git ในโฟลเดอร์นี้
git init

# 3. เพิ่มไฟล์ทั้งหมดและทำการ Commit
git add .
git commit -m "Deploy Stray Dog Adoption System to GitHub Pages"

# 4. ตั้งชื่อ Branch หลักเป็น main
git branch -M main

# 5. เชื่อมต่อกับ Repository ของท่านบน GitHub (เปลี่ยน USERNAME และ REPO ให้ตรงกับของท่าน)
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 6. Push ขึ้น GitHub
git push -u origin main
```

---

### ขั้นตอนที่ 3: เปิดใช้งาน GitHub Pages บนหน้าเว็บ GitHub
1. บนหน้า Repository ของท่านใน GitHub ให้คลิกแท็บ **Settings** (รูปฟันเฟืองด้านบน)
2. แถบเมนูด้านซ้าย ให้คลิกที่ **Pages**
3. ในส่วน **Build and deployment**:
   - **Source**: เลือก `Deploy from a branch`
   - **Branch**: เลือก `main` และโฟลเดอร์เลือก `/(root)`
   - กดปุ่ม **Save**
4. รอประมาณ 1 - 2 นาที GitHub จะประมวลผลและสร้างลิงก์เว็บไซต์ให้ที่ด้านบน เช่น:
   ```
   https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/
   ```
5. คลิกเข้าลิงก์เพื่อเปิดใช้งานระบบได้ทันที!

