function operate(operator, a, b) {
  let result = a;
  switch (operator) {
    case '+':
      result += b;
      break;
    case '-':
      result -= b;
      break;
    case '*':
      result *= b;
      break;
    case '/':
      result /= b;
      break;
  }
  return result;
}

let firstNumber;
let operator = null;
let secondNumber;

function whatGoesOnDisplay(currentNumber, digit){
  if (currentNumber.length >= 13) return currentNumber;
  if (currentNumber == '0') {
    return digit;
  }
  return currentNumber += digit;
}

let display = document.getElementById('centered-display');
function putOnDisplay(digit = '0'){
  display.textContent = whatGoesOnDisplay(display.textContent, digit);
  if (operator === null){
    firstNumber = display.textContent;
  } else {
    secondNumber = display.textContent;
  }
}

const digits = document.querySelectorAll('.digit');
for (const digit of Array.from(digits)){
  digit.addEventListener('click', () => {
    if (digit.id === 'delete'){
      deleteLastDigit();
      return;
    }
    putOnDisplay(digit.textContent);
  });
}

function deleteLastDigit(){

}
