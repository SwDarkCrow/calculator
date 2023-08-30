function operate(newOperator = null) {
  firstNumber = firstNumber === '' ? '0' : firstNumber;
  switch (operator) {
    case '+':
      firstNumber = +firstNumber + +secondNumber;
      break;
    case '-':
      firstNumber -= +secondNumber;
      break;
    case 'x':
      firstNumber *= +secondNumber;
      break;
    case '/':
      if (secondNumber === '0') {
        firstNumber = 'Error';
        displayFirstNumber = true;
      } else {
        firstNumber /= +secondNumber;
      }
      break;
  }
  putOnDisplay(firstNumber);
  firstNumber = firstNumber === 'Error' ? '' : firstNumber.toString();
  secondNumber = '';
  operator = newOperator;
}

let firstNumber = '0';
let operator = null;
let secondNumber = '';
let displayFirstNumber = true;

let display = document.getElementById('centered-display');

function displayLogic(digit){
  digit = digit.toString();
  if (digit.length > 13) {
    if (digit.includes('.')) return digit.slice(0, 13);
    return 'Error';
  }
  if (digit === '') return '0';
  return digit;
}

function putOnDisplay(digit = '0'){
  display.textContent = displayLogic(digit);
}

const digits = document.querySelectorAll('.digit');
for (const digit of Array.from(digits)){
  digit.addEventListener('click', () => {
    if (digit.id === 'delete'){
      deleteLastDigit();
      return;
    }
    if (displayFirstNumber) {
      if (firstNumber.length >= 13) return;
      if (firstNumber.includes('.') && digit.id === 'comma') return;
      firstNumber = firstNumber === '0' ? digit.textContent : firstNumber.concat(digit.textContent)
      putOnDisplay(firstNumber);
    } else {
      if (secondNumber.length >= 13) return;
      if (secondNumber.includes('.') && digit.id === 'comma') return;
      secondNumber = secondNumber.concat(digit.textContent);
      putOnDisplay(secondNumber);
    }
  });
}

const operands = document.querySelectorAll('.operand');
for (const operand of Array.from(operands)){
  operand.addEventListener('click', () => {   
    if (operand.textContent === '+/-') {
      negativeCurrentNumber();
      return;
    }
    if (operand.textContent === '%') {
      percentCurrentNumber();
      return;
    }
    if (operator === null) {
      operator = operand.textContent;
      operand.style.backgroundColor = '#94e2d5'
      displayFirstNumber = false;
    } else {
      resetOperandsStyle();
      operand.style.backgroundColor = '#94e2d5'
      operate(operand.textContent);
    }
  });
}

function negativeCurrentNumber(){
  if (secondNumber === '') {
    firstNumber = +firstNumber * -1;
    putOnDisplay(firstNumber);
  } else {
    secondNumber = +secondNumber * -1;
    putOnDisplay(secondNumber);
  }
}

function percentCurrentNumber(){
  if (secondNumber === '') {
    firstNumber = +firstNumber / 100;
    putOnDisplay(firstNumber);
  } else {
    secondNumber = +secondNumber / 100;
    putOnDisplay(secondNumber);
  }
}

function resetOperandsStyle(){
  for (const operand of Array.from(operands)){
    operand.style.backgroundColor = '#89b4fa';   
  }
}

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
  if (operator === null) return;
  if (secondNumber === '') return;
  resetOperandsStyle();
  operate();
});

function deleteLastDigit(){
  if (secondNumber === '') {
    firstNumber = firstNumber.slice(0, -1);
    putOnDisplay(firstNumber);
  } else {
    secondNumber = secondNumber.slice(0, -1);
    putOnDisplay(secondNumber);
  }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

function clear(){
  firstNumber = '0';
  operator = null;
  resetOperandsStyle();
  secondNumber = '';
  displayFirstNumber = true;
  putOnDisplay();
}
