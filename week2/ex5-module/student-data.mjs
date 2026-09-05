const students = [
    {
        id: 67112347,
        name: "Pun",
        major: "CE",
        raw: 22,
        attendance: 10,
        project: 15,
        midterm: 15,
        final: 27
    },
    {
        id: 67119911,
        name: "Pond",
        major: "IT",
        raw: 33,
        attendance: 10,
        project: 15,
        midterm: 18,
        final: 269
    },
    {
        id: 67117788,
        name: "Book",
        major: "CE",
        raw: 44,
        attendance: 10,
        project: 15,
        midterm: 17,
        final: 29
    },
    {
        id: 67111122,
        name: "Boss",
        major: "CE",
        raw: 14,
        attendance: 10,
        project: 15,
        midterm: 19,
        final: 26
    },

    {
        id: 67113344,
        name: "Fame",
        major: "IT",
        raw: 41,
        attendance: 10,
        project: 15,
        midterm: 20,
        final: 25
    },
    {
        id: 67115566,
        name: "make",
        major: "IT",
        raw: 32,
        attendance: 10,
        project: 15,
        midterm: 0,
        final: 0
    }
]

export const getAllStudents = () => {
    return students.map((student) => ({...student}));
};

export const findStudentById = (id) => {
    const found = students.find((student) => student.id === id);
    return found ? {...found } : undefined;
};

