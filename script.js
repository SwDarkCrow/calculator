function operate(newOperator = null) {
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
  firstNumber = firstNumber === 'Error' ? '' : firstNumber;
  secondNumber = '';
  operator = newOperator;
}

let firstNumber = '0';
let operator = null;
let secondNumber = '';
let displayFirstNumber = true;

let display = document.getElementById('centered-display');

function displayLogic(digit){
  if (digit.length >= 13) return 'Error';
  if (digit === '0') return digit;
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
      firstNumber = firstNumber === '0' ? digit.textContent : firstNumber.concat(digit.textContent)
      putOnDisplay(firstNumber);
    } else {
      secondNumber = secondNumber.concat(digit.textContent);
      putOnDisplay(secondNumber);
    }
  });
}

const operands = document.querySelectorAll('.operand');
for (const operand of Array.from(operands)){
  operand.addEventListener('click', () => {   
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

function resetOperandsStyle(){
  for (const operand of Array.from(operands)){
    operand.style.backgroundColor = '#89b4fa';   
  }
}

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
  if (firstNumber === '') return;
  if (operator === null) return;
  if (secondNumber === '') return;
  resetOperandsStyle();
  operate();
});

function deleteLastDigit(){

}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

function clear(){
  firstNumber = '0';
  operator = null;
  secondNumber = '';
  displayFirstNumber = true;
  putOnDisplay();
}
