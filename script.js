const mathOperations = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
};


function operate(operator, num1, num2) {
  if (operator === "+") return mathOperations.add(num1, num2);
  else if (operator  === "-") return mathOperations.subtract(num1, num2);
  else if (operator === "*") return mathOperations.multiply(num1, num2);
  else if (operator === "/") return mathOperations.divide(num1, num2);
}


