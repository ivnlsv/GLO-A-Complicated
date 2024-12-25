function processString(input) {
    if (typeof input !== 'string') {
        alert('Необходимо передать строку');
        return;
    }
    input = input.trim();
    if (input.length > 30) {
        input = input.slice(0, 30) + '...';
    }

    console.log(input);
}