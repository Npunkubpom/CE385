function getMenuPrice(menu){
    switch(menu) {
        // จงใจใช้ fall-through เพราะทั้ง 3 เมนูราคา 50 บาท
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;
        
        case "ผัดไทย":
            return 60; 
        
        case "ต้มยำกุ้ง":
            return 120;

        default:
            return 0;

    }
}

function getSizeMultiplier(size){
    switch(size){
        case "ธรรมดา":
            return 1;
        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default:
            return 1;
    }
}

// รายการอาหารที่ลูกค้าสั่ง
const orders = [
  { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ต้มยำกุ้ง", size: "ธรรมดา", qty: 1 },
  { menu: "ข้าวมันไก่", size: "จัมโบ้", qty: 1 },
  { menu: "กระเพราไม่ใส่ผักเผ็ดๆไม่ใส่พริก", size: "ธรรมดา", qty: 1 }
];

// คำนวณราคาของแต่ละรายการและราคารวมทั้งหมด
let total = 0;

for (const order of orders) {
  const menuPrice = getMenuPrice(order.menu);
  const sizeMultiplier = getSizeMultiplier(order.size);
  const price = menuPrice * sizeMultiplier * order.qty;

  total += price;

  console.log(
    `${order.menu} (${order.size}) x${order.qty} = ${price} บาท`
  );
}

console.log(`ราคารวมทั้งหมด = ${total} บาท`);

