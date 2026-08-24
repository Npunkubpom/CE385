// ---------- ส่วนที่ 1 : สร้างตัวแปร 6 ชนิด ----------

// String
const myName = "ปั้น";

// Number
const myAge = 20;

// Boolean
const isStudent = true;

// Undefined
let myAddress;

// Null
const myPhoneNumber = null;

// Array
const mySubjects = ["คณิตศาสตร์", "วิทยาศาสตร์", "ภาษาอังกฤษ"];


// แสดงค่าและชนิดข้อมูลของแต่ละตัวแปร
console.log(`ค่า: ${myName} | ชนิด: ${typeof myName}`);
console.log(`ค่า: ${myAge} | ชนิด: ${typeof myAge}`);
console.log(`ค่า: ${isStudent} | ชนิด: ${typeof isStudent}`);
console.log(`ค่า: ${myAddress} | ชนิด: ${typeof myAddress}`);
console.log(`ค่า: ${myPhoneNumber} | ชนิด: ${typeof myPhoneNumber}`);
console.log(`ค่า: ${mySubjects} | ชนิด: ${typeof mySubjects}`);


// ---------- ส่วนที่ 2 : ตอบคำถามด้วยโค้ด ----------

// typeof null คืออะไร?
// typeof null ได้ "object"
// แต่จริง ๆ แล้ว null ไม่ใช่ Object เป็นค่าพิเศษของ JavaScript
console.log(`typeof null = ${typeof null}`);


// ตัวแปรที่ประกาศแล้วแต่ยังไม่ได้กำหนดค่า มีชนิดเป็นอะไร?
console.log(`typeof myAddress = ${typeof myAddress}`);


// แปลง String "abc" เป็น Number ด้วย Number()
// แต่ String "abc" ไม่สามารถแปลงเป็น Number ได้
// จึงได้ค่า NaN (Not a Number)
const myNaN = Number("abc");

console.log(`ค่า: ${myNaN} | ชนิด: ${typeof myNaN}`);

// ตรวจสอบว่า myNaN เป็น NaN จริงหรือไม่
console.log(`เป็น NaN หรือไม่: ${Number.isNaN(myNaN)}`);


// ---------- ส่วนที่ 3 : การแปลงชนิดข้อมูล ----------

// โจทย์กำหนดให้ inputAge เป็นข้อความ
const inputAge = "20";

const inputScore = "85.5";


// แปลง String เป็น Number
const ageNumber = Number(inputAge);

console.log(`อายุ + 5 = ${ageNumber + 5}`);


// แปลง String เป็น Number
const scoreNumber = Number(inputScore);

console.log(`คะแนน = ${scoreNumber.toFixed(1)}`);


// เปรียบเทียบ String "20" กับ Number 20
console.log(`inputAge === 20: ${inputAge === 20}`);

// แปลง inputAge เป็น Number ก่อน แล้วจึงเปรียบเทียบ
console.log(`Number(inputAge) === 20: ${Number(inputAge) === 20}`);