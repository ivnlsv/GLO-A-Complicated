let strInput = "loremasakfaslkfjalsflaslfalksfklajlskfjlkajslfalksfjlkajsfalksfjklajlsfkjlsfjlkslkdfjklsjdfkljlsjdflsjl";
function inputString(input) {
    if (typeof input !== 'string') {
        alert('Это не строка. Необходимо передать строку');
        return;
    }
    input = input.trim();
    if (input.length > 30) {
        input = input.slice(0, 30) + '...';
    }
    return input;
}
console.log(inputString(strInput));