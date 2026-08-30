Ex1.
กำหนดตัวแปร 5 ตัว ชื่อเล่น รหัสนักศึกษา อายุ สาขาวิชา จำนวนวิชาที่ลงทะเบียน
กำหนดปีปัจจุบัน
กำหนดจบในอีก2 ปี
หน้าจอแสดงผล ด้วยconsole.log()
ใช้template literal แสดงค่าจากตัวแปร
ใช้เครื่องหมาย backtick เพื่อสร้าง template literal
ใช้ ${} เพื่อแทรกค่าจากตัวแปรลงในข้อความ

Ex2.
ส่วนที่1
กำหนดตัวแปร string number boolean underfined null array
console.log แสดงค่าแต่ละชนิดข้อมูลของแต่ละตัวแปร
typeof null ได้ object
ตัวแปรที่ประกาศตัวแปรแล้วยังไม่กำหนดค่า มีชนิดเป็น underfined
ส่วนที่2
แปลง String "abc" เป็นnumber ด้วย Number()
แต่string "abc" ไม่สามารถแปลงเป็น Number ได้
จึงได้ค่าเป็น Nan แต่ type เป็น number
ส่วนที่3
กำหนด inputAge = "20"
กำหนด inputScore = "85"
แปลง string เป็น number
เปรียบเทียบ string "20" กับ number 20
แปลงinputAge เป็น Number ก่อนแล้ว เปรียบเทียบ

Ex3.
กำหนดตัวแปร workshopRaw =48 attendance = 9 project = 17 midterm = 15 final = 24
กำหนดคะแนนเต็มแต่ละส่วน
แปลงคะแนน workshopRaw จากเต็ม 60 ไปเป็นเต็ม 20
ใช้สูตร (workshopRaw / WORKSHOP_RAW_MAX) * WORKSHOP_MAX
คำนวนคะแนนทั้งหมด
คำนวนเปอร์เซ็นของคะแนนรวม
คำนวนว่ายังขาดอีกกี่คะแนนถึงจะถึง 80 คะแนน
แสดงผล console.log

Ex4.
function toGrade(Score) ตรวจสอบก่อนว่าอยู่ระหว่าง 0-100 มั้ย ค่อยตัดเกรด
ตรวจสอบเกรดจากคะแนนมากไปน้อย
ทดสอบตามโจทย์ สร้าง array
ใช้for...of เอา เกรดแต่ละตัวออกมาเรียงกัน
ในfor..of แสดงค่าด้วยconsole.log 

Ex5.
function getMenuPrice(menu) ใช้switch menu กำหนด case เมนู return ค่าอาหาร
function getSizeMultiplier(size) ใช้switch size กำหนด ขนาดของเมนู ธรรมดา พิเศษ จัมโบ้
สร้าง array ของ order 
กำหนดตัวแปร total = 0 เป็นค่าเริ่มต้น
ใช้ for...of order
กำหนดตัวแปร ให้ใช้ข้อมูลจากfuction ที่ดึงข้อมูลจากarray
เอาราคาขายprice ทั้งหมดบวกกับtotalแสดงเป็นราคาทั้งหมด
console.log แสดงผล

Ex6.
กำหนด VALID_USERNAME
กำหนด VALID_PASSWORD
function login ใสพารามิเตอร์ inputUser inputPass role isActive age
ตรวจสอบ user password ถูกต้องมั้ย
ตรวจสอบว่า บัญชีถูกระงับมั้ย
ตรวจสอบอายุว่าถึงมั้ย
ตรวจสอบว่า role  เป็นเป็นอาจารย์ นักเรียน เพื่อระบุสิทธิ์
ทดสอบตัวอย่าง

