let arr = ["245", "456987", "57643", "89017623", "213654", "1234098", "7653"];
let filteredNumbers = arr.filter(num => num.startsWith("2") || num.startsWith("4"));
console.log("Числа, начинающиеся с 2 или 4:", filteredNumbers);

for (let n = 1; n <= 100; n++) {
    let isSimple = true;
  
    if (n > 1) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          isSimple = false;
          break;
        }
      }
    } else {
      isSimple = false; 
    }

    if (isSimple) {
      console.log(`${n} — Делители числа: 1 и ${n}`);
    }
  }
  