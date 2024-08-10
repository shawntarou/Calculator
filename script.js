function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let firstNum;
let seccondNum;
let operator;

function operate() {
    let firstNum = parseInt(prompt("first?"));
    let operator = prompt("operator?");
    let secondNum = parseInt(prompt("second?"));
    switch (operator) {
        case 'add':
            console.log(add(firstNum,secondNum));
            break;
        case 'subtract':
            console.log(subtract(firstNum,secondNum));
            break;
        case 'multiply':
            console.log(multiply(firstNum,secondNum));
            break;
        case 'divide':
            console.log(divide(firstNum,secondNum));
            break;
    };
};

operate();