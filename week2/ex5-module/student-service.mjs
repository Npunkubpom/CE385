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

export const toGrade = (score) => {
    if (score >= 0 && score <= 100) {
        const rule = gradeRules.find(rule => score >= rule.min);
        return rule.grade;
    }
    return "คะแนนไม่ถูกต้อง";
};

export const isPassing = (score) => {
    return score >= 50 ;
};

const calculateWorkshopScore = (raw, full = 60, weight = 20) => {
  const workshopscore = (raw / full) * weight;
  return workshopscore;
};

const calculateTotal = (WorkshopScore, attendance, project, midterm, final) => {
  const score = WorkshopScore + attendance + project + midterm + final;
  return score;
};

export const summarize = (students) => {

    return students.map((student) => {

        const workshopScore =
            calculateWorkshopScore(student.raw);

        const score =
            calculateTotal(
                workshopScore,
                student.attendance,
                student.project,
                student.midterm,
                student.final
            );

        const grade = isPassing(score)
            ? toGrade(score)
            : "F";

        return {
            id : student.id,
            name: student.name,
            raw: student.raw,
            workshop: Number(workshopScore.toFixed(2)),
            attendance: student.attendance,
            project: student.project,
            midterm: student.midterm,
            final: student.final,
            score: Number(score.toFixed(2)),
            grade: grade,
            passing: isPassing(score)
        };
    });
};