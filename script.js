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

let display = document.getElementById('centered-display');
function putOnDisplay(string = '0'){
  if (display.textContent.length >= 13) return;
  if (display.textContent == '0') {
    display.textContent = string;
    return;
  }
  display.textContent += string;
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
