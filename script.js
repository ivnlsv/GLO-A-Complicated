let userInput = prompt("Введите число:");
let str = userInput.replace(/\D/g, "");
if (str === "" || str === NaN) {
    alert("Цифры отсутствуют")
} else { 
    let num = Number(str); 
    alert(num);
}

