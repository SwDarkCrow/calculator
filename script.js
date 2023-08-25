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

