const gradeRules = [
    { min: 80, grade: "A" },
    { min: 75, grade: "B+" },
    { min: 70, grade: "B" },
    { min: 65, grade: "C+" },
    { min: 60, grade: "C" },
    { min: 55, grade: "D+" },
    { min: 50, grade: "D" },
    { min: 0, grade: "F" }
];

function isValidScore(score){
    if (score < 0 || score > 100)
        return false;
    return true;
}

function toGrade(total) {
    const rule = gradeRules.find(rule => total >= rule.min);
    return rule.grade;
}

function calculateWorkshopScore(raw, full = 60, weight = 20) {
  const workshopscore = (raw / full) * weight;
  return workshopscore;
}

function calculateTotal(WorkshopScore, attendance, project, midterm, final) {
  const total = WorkshopScore + attendance + project + midterm + final;
  return total;
}

const student = [
    {
        name: "Pun",
        raw: 45,
        attendance: 10,
        project: 15,
        midterm: 20,
        final: 30
    },
    {
        name: "Book",
        raw: 0,
        attendance: 10,
        project: 5,
        midterm: 20,
        final: 30
    },
    {
        name: "Boss",
        raw: 45,
        attendance: 10,
        project: 150,
        midterm: 10,
        final: 6
    }
];

const result = student.map((student) => {
    const workshopScore =
        calculateWorkshopScore(student.raw);
    const total =
        calculateTotal(
            workshopScore,
            student.attendance,
            student.project,
            student.midterm,
            student.final
        );
    const grade = isValidScore(total)
        ? toGrade(total)
        : "ไม่ตรงตามเงื่อนไข";
    return {
        name: student.name,
        raw: student.raw,
        workshop: workshopScore,
        attendance: student.attendance,
        project: student.project,
        midterm: student.midterm,
        final: student.final,
        total: total,
        grade: grade
    };
});
console.table(result);

const score1 = calculateWorkshopScore(48);
const score2 = calculateWorkshopScore(48, 60, 20);
//score3 = ใส่ค่า full = undefined จะได้ค่า default ของ full = 60 และ weight = 25
const score3 = calculateWorkshopScore(48, undefined, 25);
console.log(score1);
console.log(score2);
console.log(score3);

