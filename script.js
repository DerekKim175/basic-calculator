let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldResetScreen = false;

const integers = document.querySelector('integers');
const display = document.querySelector('.textview');

function updateDisplay(value) {
    display.value = value;
}

let currentNumber = "";

function appendNumber(num) {
   if (shouldResetScreen) {
        resetScreen();
   }
    currentNumber += num;
    updateDisplay(currentNumber);
}

function resetScreen() {
    currentNumber = '';
    updateDisplay(currentNumber);
    shouldResetScreen = false;
}

function saveNumber(operator) {
    if (currentOperation !== null) {
        evaluate();
    }
    firstNumber = currentNumber;
    currentOperation = operator;
    shouldResetScreen = true;
}

function calculateResult() {
  if (currentOperation === null || shouldResetScreen) return;
  
  secondNumber = currentNumber;
  const result = operate(currentOperation, firstNumber, secondNumber);

  updateDisplay(result);
  currentNumber = result; 
  currentOperation = null;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {

    if (b === 0) {
        return null;
    }

    return x / y;
}

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    
    switch (operator) {

        case '+':
            return add(x, y);

        case '-':
            return subtract(x, y);

        case 'x':
            return multiply(x, y);

        case '÷':
        case '/':
            return divide(x, y);

        default:
            return null;

    }
}
