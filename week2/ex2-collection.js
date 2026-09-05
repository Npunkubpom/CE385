const students = [
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
        score: 49,
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

const findById = (students, id) => {
    const student = students.find(s => s.id === id);
    return student;
};

const findByMajor = (students, major) => {
    const result = students.filter(s => s.major === major);
    return result;
};

const hasFailingStudents = (students) => {
    return students.some(s => s.score < 50);
};

const getEmail = (students, id) => {
    const student = students.find(s => s.id === id);

    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};

console.log(findById(students, 67112347));

console.log(findByMajor(students, "CE"));

console.log(hasFailingStudents(students));

console.log(getEmail(students, 67112347));

console.log(findById(students, "9999"));

console.log(getEmail(students, "9999"));

const newStudent = {
    id: 67112341,
    name: "win",
    major: "IT",
    score: 60
};
const newStudents = [...students, newStudent];

console.log(getEmail(newStudents, 67112341));