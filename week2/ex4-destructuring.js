const baseInfo    = { id: "6501", name: "สมชาย", major: "CE" };
const scoreInfo   = { id: "6501", score: 78, attendance: 9 };
const contactInfo = { id: "6501", contact: { email: "somchai@dpu.ac.th", phone: "081-111-1111" } };

const mergeStudent = (base, score, contact) => {
    const grade =
        score.score >= 80 ? "A" :
        score.score >= 70 ? "B" :
        score.score >= 60 ? "C" :
        score.score >= 50 ? "D" : "F";

    return {
        ...base,
        ...score,
        ...contact,
        grade: grade,
    };
};

const merged = mergeStudent(baseInfo, scoreInfo, contactInfo);

console.log("ข้อมูลนักศึกษา:", merged);

const copy = {...merged};

copy.contact.email = "newemail@dpu.ac.th";

console.log("copy email:", copy.contact.email);
console.log("merged email:", merged.contact.email);

const correctCopy = {...merged,contact: {...merged.contact,},};

correctCopy.contact.email = "correct@dpu.ac.th";

console.log("correctCopy email:", correctCopy.contact.email);
console.log("merged email:", merged.contact.email);

const formatStudent = ({name,score,grade,major = "ไม่ระบุ",}) => {
    return `${name} (${major}) - คะแนน ${score} - เกรด ${grade}`;
};

console.log(formatStudent(merged));

const { contact, ...publicData } = merged;

console.log("ข้อมูลที่เผยแพร่:", publicData);