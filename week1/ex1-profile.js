const nickname = "`ปั้น";
const studentId = "67112347";
const age = 20;
const major = "วิศวะคอมพิวเตอร์";
const courses = 8;

let currentYear = 2569;
let remainingYears = 2;

// แสดงข้อมูลแนะนำตัวด้วย console.log()
// ใช้ Template Literal เพื่อแสดงค่าจากตัวแปร
// ใช้เครื่องหมาย backtick (`) เพื่อสร้าง Template Literal
// ใช้ ${} เพื่อแทรกค่าตัวแปรลงในข้อความ
console.log(`====== บัตรแนะนำตัว ======
ชื่อเล่น      : ${nickname}
รหัสนักศึกษา : ${studentId}
อายุ          : ${age} ปี
สาขาวิชา      : ${major}
ลงทะเบียน     : ${courses} วิชา
ปีที่จบ       : ${currentYear + remainingYears}
========================`);
