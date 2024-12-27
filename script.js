let price;

do {
  let userInput = prompt("Введите стоимость (числом):");
  
  if (userInput === null) {
    price = null;
    break;
  }

    userInput = userInput.trim();
  price = Number(userInput);

  if (isNaN(price) || userInput === "") {
    alert("Пожалуйста, введите корректное число!");
    price = undefined; 
  }
} while (price === undefined);

console.log("Результат:", price);