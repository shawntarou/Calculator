function addOp(x, y) {
    return x + y;
}

function subtractOp(x, y) {
    return x - y;
}

function multiplyOp(x, y) {
    return x * y;
}

function divideOp(x, y) {
    return x / y;
}

let firstNum;
let seccondNum;
let operator;

const displayNumber = document.querySelector("#display-number");

function operate() {
    switch (operator) {
        case 'add':
            const result = addOp(firstNum, secondNum);
            console.log(result);
            displayNumber.textContent = result;
            currentValue = result;
            firstNum = 0;
            secondNum = 0;
            break;
        case 'subtract':
            console.log(subtractOp(firstNum, secondNum));
            break;
        case 'multiply':
            console.log(multiplyOp(firstNum, secondNum));
            break;
        case 'divide':
            console.log(divideOp(firstNum, secondNum));
            break;
    };
};

const displayValue = document.querySelector("#display-number");
let currentValue = 0;

const one = document.querySelector("#one-button");
const two = document.querySelector("#two-button");
const three = document.querySelector("#three-button");
const four = document.querySelector("#four-button");
const five = document.querySelector("#five-button");
const six = document.querySelector("#six-button");
const seven = document.querySelector("#seven-button");
const eight = document.querySelector("#eight-button");
const nine = document.querySelector("#nine-button");
const zero = document.querySelector("#zero-button");

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
zero.addEventListener("click", function () {
    if (displayValue.textContent == 0) {
        currentValue = "0";
        displayValue.textContent = currentValue;
    } else {
        currentValue = currentValue + "0";
        displayValue.textContent = currentValue;
    }
    console.log(currentValue);
})

const allClear = document.querySelector("#all-clear-button");
const add = document.querySelector("#add-button");
const subtract = document.querySelector("#subtract-button");
const multiply = document.querySelector("#multiply-button");
const divide = document.querySelector("#divide-button");
const equals = document.querySelector("#equals-button");

let operationCheck = false;
let clickCounter = 0;

allClear.addEventListener("click", function () {
    currentValue = 0;
    displayValue.textContent = currentValue;
    console.log(currentValue);
})

function clearDisplay() {
    displayValue.textContent = 0;
    currentValue = 0;
    console.log("First Num:" + firstNum);
    console.log("curr val:" + currentValue);
}

add.addEventListener("click", function () {
    if (operationCheck) {
        secondNum = Number(currentValue);
        operate();
        operationCheck = false;
    }
    firstNum = Number(currentValue);
    operator = 'add';
    console.log("add");
    currentValue = 0;
    operationCheck = true;
})

equals.addEventListener("click", function () {
    secondNum = Number(currentValue);
    operate();
})






