const VALID_USERNAME = "admin";
const VALID_PASSWORD = "ce385pass";

function login(inputUser,inputPass , role , isActive, age){
    if (inputUser !== VALID_USERNAME || inputPass !== VALID_PASSWORD){
        return "401: ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }

    if (isActive === false){
        return "403: บัญชีถูกระงับการใช้งาน";
    }
    
    if (age < 18){
        return "อายุไม่ถึงเกณฑ์";
    }

    if (role === "อาจารย์") {
        return "200: เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
    } else if (role === "นักศึกษา") {
        return "200: เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
    }

    return "403: บทบาทไม่ถูกต้อง";
}

console.log(login("admin", "ce385pass", "อาจารย์", true, 30));

 
console.log(login("admin", "ce385pass", "นักศึกษา", true, 20));

 
console.log(login("admin", "wrongpass", "อาจารย์", true, 30));

 
console.log(login("wronguser", "ce385pass", "อาจารย์", true, 30));

 
console.log(login("admin", "ce385pass", "นักศึกษา", false, 20));

 
console.log(login("admin", "ce385pass", "นักศึกษา", true, 16));
