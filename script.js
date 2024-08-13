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
let secondNum;
let operator;
let result;

const displayNumber = document.querySelector("#display-number");

function operate() {
    switch (operator) {
        case 'add':
            result = addOp(firstNum, secondNum);
            console.log(result);
            displayNumber.textContent = result;
            currentValue = 0;
            firstNum = 0 + result;
            secondNum = 0;
            break;
        case 'subtract':
            result = subtractOp(firstNum, secondNum);
            console.log(result);
            displayNumber.textContent = result;
            currentValue = 0;
            firstNum = 0 + result;
            secondNum = 0;
            break;
        case 'multiply':
            result = multiplyOp(firstNum, secondNum);
            console.log(result);
            displayNumber.textContent = result;
            currentValue = 0;
            firstNum = 0 + result;
            secondNum = 0;
            break;
        case 'divide':
            result = divideOp(firstNum, secondNum);
            console.log(result);
            if (result == Infinity) {
                displayNumber.textContent = "( •_•)";
                currentValue = 0;
                firstNum = 0;
                secondNum = 0;
            } else {
                displayNumber.textContent = result;
                currentValue = 0;
                firstNum = 0 + result;
                secondNum = 0;
            }
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

const percent = document.querySelector("#percent-button")

percent.addEventListener("click", function () {
    switch (displayNumber) {
        case 0:
            break;
        default:
            currentValue = currentValue * 0.01;
            if (String(currentValue).length > 7) {
                displayValue.textContent = String(currentValue).substring(0,8);
            }
            else {
                displayValue.textContent = currentValue;
                break;
            }
    }
});

one.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "1";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "1";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 1);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
two.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "2";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "2";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 2);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
three.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "3";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "3";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 3);
            if (operationCheck) {
                secondNum = currentValue;
            }
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
four.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "4";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "4";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 4);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
five.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "5";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "5";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 5);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
six.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "6";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "6";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 6);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
seven.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "7";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "7";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 7);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
eight.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "8";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "8";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 8);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
nine.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "9";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "9";
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = String(currentValue + 9);
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})
zero.addEventListener("click", function () {
    if (newOperationCheck == true) {
        currentValue = "0";
        displayValue.textContent = currentValue;
        newOperationCheck = false;
    }
    else if (displayValue.textContent == 0) {
        currentValue = "0";
        displayValue.textContent = currentValue;
    }
    else if (currentValue == 0) {
        displayValue.textContent = currentValue;
    }
    else {
        if (currentValue.length > 7) {
            return;
        } else {
            currentValue = currentValue + "0";
            displayValue.textContent = currentValue;
        }
    }
    console.log(currentValue);
})

const allClear = document.querySelector("#all-clear-button");
const add = document.querySelector("#add-button");
const subtract = document.querySelector("#subtract-button");
const multiply = document.querySelector("#multiply-button");
const divide = document.querySelector("#divide-button");
const equals = document.querySelector("#equals-button");


// Makes sure that an operation completes before another can start (E.g. 1 + 1 + 1 --> 1 + 1 = 2 + 1)
let operationCheck = false;

// Checks if an operation has already been completed allowing the user to start a new operation w/o clearing
let newOperationCheck = false;


allClear.addEventListener("click", function () {
    currentValue = 0;
    displayValue.textContent = currentValue;
    operationCheck = false;
    newOperationCheck = false;
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
        if (secondNum == 0 && displayValue.textContent !== currentValue) {
            secondNum = firstNum;
            operate();
        } else {
            secondNum = Number(currentValue);
            operate();
        }
    }
    else {
        if (!newOperationCheck == true) {
            firstNum = Number(currentValue);
        }
        operator = 'add';
        console.log("add");
        currentValue = 0;
        operationCheck = true;
    }
    operator = 'add';
})
subtract.addEventListener("click", function () {
    if (operationCheck) {
        secondNum = Number(currentValue);
        operate();
    }
    else {
        if (!newOperationCheck == true) {
            firstNum = Number(currentValue);
        } 
        operator = 'subtract';
        console.log("subtract");
        currentValue = 0;
        operationCheck = true;
    }
    operator = 'subtract';
})
multiply.addEventListener("click", function () {
    if (operationCheck) {
        secondNum = Number(currentValue);
        operate();
    }
    else {
        if (!newOperationCheck == true) {
            firstNum = Number(currentValue);
        }
        operator = 'multiply';
        console.log("multiply");
        currentValue = 0;
        operationCheck = true;
    }
    operator = 'multiply';
})
divide.addEventListener("click", function () {
    if (operationCheck) {
        secondNum = Number(currentValue);
        operate();
    }
    else {
        if (!newOperationCheck == true) {
            firstNum = Number(currentValue);
        }
        operator = 'divide';
        console.log("divide");
        currentValue = 0;
        operationCheck = true;
    }
    operator = 'divide';
})

equals.addEventListener("click", function () {
    if (!firstNum) {
        return;
    }
    else {
        secondNum = Number(currentValue);
        operate();
        operator = undefined;
        newOperationCheck = true;
        operationCheck = false;
    }
})

while (operator == 'add') {
    add.classList.toggle("toggle")
    console.log("sdfsj")
};




