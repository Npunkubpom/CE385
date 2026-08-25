// คะแนนดิบของ Workshop เต็ม 60 คะแนน
const workshopRaw = 48;
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

// คะแนนเต็มของแต่ละส่วน
const WORKSHOP_RAW_MAX = 60;
const WORKSHOP_MAX = 20;
const TOTAL_MAX = 100;
const PASS_SCORE = 80;

// แปลงคะแนน Workshop จากเต็ม 60 ให้เป็นคะแนนเต็ม 20
// ใช้สูตร (คะแนนดิบ ÷ คะแนนเต็มเดิม) × คะแนนเต็มใหม่
const workshop = (workshopRaw / WORKSHOP_RAW_MAX) * WORKSHOP_MAX;

// คำนวณคะแนนรวมทั้งหมด
const total = workshop + attendance + project + midterm + final;

// คำนวณเปอร์เซ็นต์ของคะแนนรวม
const percentage = (total / TOTAL_MAX) * 100;

// คำนวนว่ายังขาดอีกกี่คะแนนจึงจะได้ 80 คะแนน
const remaining = PASS_SCORE - total;
// แสดงผลคะแนน
console.log(`
===== เครื่องคิดเลขคะแนน CE385 =====
คะแนนรวม: ${total.toFixed(2)} / 100
เปอร์เซ็นต์: ${percentage.toFixed(2)}%
ยังขาดอีก ${remaining} คะแนน
`);