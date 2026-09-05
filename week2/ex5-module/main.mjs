import { getAllStudents, findStudentById } from "./student-data.mjs";
import { toGrade, isPassing, summarize } from "./student-service.mjs";

const students = getAllStudents();
const summary = summarize(students);
console.table(summary);

console.log("\n=== ทดสอบ findStudentById ===");
console.log("findStudentById(67112347) :", findStudentById(67112347));
console.log("findStudentById(9999) :", findStudentById(9999));