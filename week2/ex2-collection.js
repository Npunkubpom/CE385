students = [
    {
        id: 67112347,
        name: "Pun",
        major: "CE",
        score: 90,
        contact: {
            email: "pun@dpu.ac.th.com",
            phone: "0633433765"},
    }
]

findById = (id) => {
    const s = students.find((s) => s.id === id);
    return s;
}

console.log(findById(67112347));

findByMajor = (major) => {
    const m = students.find((m) => m.major === major);
    return m;
}

console.log(findByMajor("CE"));