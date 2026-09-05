students = [
    {
        id: 67112347,
        name: "Pun",
        major: "CE",
        score: 90,
        contact: {
            email: "pun@dpu.ac.th",
            phone: "0633433765"},
    },
    {
        id: 67119911,
        name: "Pond",
        major: "IT",
        score: 66,
        contact: {
            email: "pond@dpu.ac.th",
            phone: "0633433765"},
    },
    {
        id: 67117788,
        name: "Book",
        major: "CE",
        score: 85,
        contact: {
            email: "book@dpu.ac.th",
            phone: "0633433765"},
    },
    {
        id: 67111122,
        name: "Boss",
        major: "CE",
        score: 44,
        contact: {
            email: "boss@dpu.ac.th",
            phone: "0633433765"},
    },

    {
        id: 67113344,
        name: "Fame",
        major: "IT",
        score: 57,
        contact: {
            email: "fame@dpu.ac.th",
            phone: "0633433765"},
    },
    {
        id: 67115566,
        name: "make",
        major: "IT",
        score: 60,
        contact: {
            email: "make@dpu.ac.th",
            phone: "0633433765"},
    }
]

const getNames = (students) => {
    return students.map(s => s.name);
};

const PassedStudents = (students) => {
    return students.filter(s => s.score >= 50)
};

const getTotalScore = (students) => {
    return students.reduce((total, s) => total + s.score, 0);
};

const getAverageScore = (students) => {
    if (students.length === 0) {
        return 0 ;
    }
    const total = students.reduce((sum,s) => sum + s.score, 0 );

    return Number((total / students.length).toFixed(2));
};

const countByGrade = (students) => {
    return students.reduce((result, s) => {
        let grade;

         if (s.score >= 80) {
            grade = "A";
        } else if (s.score >= 70) {
            grade = "B";
        } else if (s.score >= 60) {
            grade = "C";
        } else if (s.score >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        result[grade] = (result[grade] || 0) + 1;

        return result
    }, {});
}

const getTopStudent = (students) => {
    return students.reduce((top, s) => {
        return s.score > top.score ? s : top ;
    });
};
console.log(getNames(students))
console.log(PassedStudents(students))   
console.log(getTotalScore(students))
console.log(getAverageScore(students))
console.log(countByGrade(students))
console.log(getTopStudent(students))

const CEaverage = students
    .filter(s => s.major === "CE" && s.score >= 50)
    .map(s => s.score)
    .reduce((sum ,score) => sum + score / students.filter(s => s.major === "CE" && s.score >= 50).length , 0)

console.log(CEaverage)
