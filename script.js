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
            console.log(add(firstNum, secondNum));
            break;
        case 'subtract':
            console.log(subtract(firstNum, secondNum));
            break;
        case 'multiply':
            console.log(multiply(firstNum, secondNum));
            break;
        case 'divide':
            console.log(divide(firstNum, secondNum));
            break;
    };
};

const displayValue = document.querySelector("#display-number")
let currentValue;

const numButtons = document.querySelector(".num-buttons")
const one = document.querySelector("#one-button")
const two = document.querySelector("#two-button")
const three = document.querySelector("#three-button")
const four = document.querySelector("#four-button")
const five = document.querySelector("#five-button")
const six = document.querySelector("#six-button")
const seven = document.querySelector("#seven-button")
const eight = document.querySelector("#eight-button")
const nine = document.querySelector("#nine-button")

one.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "1";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 1;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
two.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "2";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 2;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
three.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "3";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 3;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
four.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "4";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 4;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
five.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "5";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 5;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
six.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "6";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 6;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
seven.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "7";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 7;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
eight.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "8";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 8;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})
nine.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "9";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + 9;
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})












function displayNum() {

}
