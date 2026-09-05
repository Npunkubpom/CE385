Ex1. สร้างตัวแปรเป็นกฎการตัดเกรด
    function ตรวจสอบว่าคะแนนอยู่ในช่วง0-100 มั้ย
    
    function ตัดเกรด ใช้find() ไล่หาค่าในarray gradeRules
    
    functionทำให้คะแนนworkshopจากเต็ม 60 ให้เต็ม 20 ไปตัดเกรดต่อ

    function คำนวนรวมคะแนน

    ประกาศตัวแปรเป็น array students

    result  ใช้ .map() รับ array students มาเปลี่ยนค่าที่ละตัว แล้วเรียกใช้ฟังชั่น
    console.table แสดงเป็นตาราง

ex2.
    array students

    arrow function findbyid รับพารามิเตอร์ studentse , id
    หาid ด้วย .find()

    arrow function findByMajor รับพารามิเตอร์ studentse , major
    คืน array ของนักศึกษาสาขานั้นด้วย .filter() จะวนลูปในarray แล้วกรองเอาค่า major ที่รับไป แล้วตรงกับใน array ที่กรองแล้วด้วย.filter(s => s.majorr === major)

    ตรวจด้วย.some() ว่ามีนักเรียนที่คะแนนน้อยกว่า50 มั้ย ถ้ามีอย่างน้อย 1 คน จะคืน true

    const get Email รับ (students, id) ใช้.find()หา id 
    return ? คือ optional chaining ถ้าในobject มีstudent ไปดู contact ถ้ามี contact  ให้ไปดู email ถ้าไม่มีไม่ error แสดงเป็น undefined ?? คือ nullish coalescing ถ้ามีใช้ค่านั้น ถ้าเป็น null and undefined แสดง "ไม่พบข้อมูลติดต่อ" 

    สร้าง array ใหม่ new Students ใส่ newStudent ต่อไปกับarray เดิม 

ex3.
    array students

    getnames (students) return .map(name)
    passedstudents(students) return .filter() score มากกว่า50 
    gettotalscore (students) return  .reduce ผลรวมคะแนนscore ทั้งหมด
    getaveragescore (students) คะแนนเฉลี่ย = คะแนนรวม ÷ จำนวนคน

    
    นับจำนวนนักศึกษาแยกตามเกรด เช่น มี A กี่คน, B กี่คน, C กี่คน ถ้าเกรดนี้ยังไม่มี ให้เริ่มที่ 0 แล้วบวก 1

    เอานักศึกษาทีละคนมาเทียบกับคนที่คะแนนสูงสุด ถ้าคนใหม่คะแนนมากกว่า ก็เปลี่ยนคนที่สูงสุด

    .filter() คัดคน
    .map()    แปลง/เอาข้อมูลออกมา
    .reduce() หาค่าเฉลี่ย

ex.4
    mergeStudent() เอาข้อมูล 3 กล่องมารวมกัน คำนวณเกรด รวม Object ด้วย Spread เพิ่ม grade ตัวใหม่เข้าไป

    merged คือข้อมูลที่รวมทั้งหมดแล้ว
    ตรงนี้คือการสร้าง Object ใหม่ แต่เป็น Shallow Copy ข้อมูลระดับบนถูก copy แต่ถ้ามี Object ซ้อนอยู่ข้างใน จะยังอ้างอิงที่ object เดียวกันแก้ค่าที่copy ค่าเดิมก็เปลี่ยนด้วย เพราะเป็นobject เดียวกัน

    correctCopy แก้ปัญหาเรา Copy contact ข้างในอีกชั้นด้วย

    formatstudent ฟังก์ชันนี้รับ Object เข้ามา แล้วแกะ name, score, grade, major ออกมาให้เลย

    แยก contact ออกจากข้อมูลที่จะเผยแพร่
    เอา contact ออกมาเก็บในตัวแปร contact ส่วนข้อมูลที่เหลือเอาไปเก็บใน publicData เผยแพร่ข้อมูลนักศึกษาโดยไม่เอาข้อมูลติดต่อออกไป

ex-5 สร้างไฟลแยก
    main.mjs 
        import { getAllStudents, findStudentById } from "./student-data.mjs";
        import { toGrade, isPassing, summarize } from "./student-service.mjs";

        เรียกใช้ getAllstudents
        เรียกใช้ summary
        แสดงตาราง
        ทดสอบfindstudentbyid

    student-data.mjs
        เก็บข้อมูลคะแนนนักเรียน เป็น object array
        export function getAllStudents ใช้ .map() Object Spread เอาข้อมูลทั้งหมดของ student มาสร้าง Object ใหม่
        export function findStudentById รับ id เข้ามาค้นหานักศึกษาที่มี id ตรงกันถ้าเจอให้ Copy ข้อมูลแล้วส่งกลับถ้าไม่เจอให้ส่ง undefined
    
    student-service.mjs
        ทำกฎของเกรด
        export function tograde ตรวจสอบว่าคะแนนอยู่ระหว่าง 0-100 ถ้าอยู่ให้ทำ .find()คำนวนเกรด 

        export ispassing คำนวนว่าคะแนนผ่าน50มั้ย

        คำนวนคะแนนworkshop แปลงเป็นเต็ม20 จาก60 

        calculatetotal คำนวนคะแนนเก็บ

        export const summarize เอาข้อมูลนักเรียนทุกคนมาคำนวณคะแนนรวม + เกรด + ผ่าน/ไม่ผ่าน แล้วสร้างข้อมูลชุดใหม่ออกมา