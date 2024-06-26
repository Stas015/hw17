// Функції для арифметичних операцій
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      return "Ділення на нуль неможливе!";
  }
  return a / b;
}

// Організуйте ввод даних
let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
let operation = prompt("Введіть операцію (+, -, *, /):");

// Обробка операцій та виведення результату
let result;

switch (operation) {
  case '+':
      result = add(num1, num2);
      break;
  case '-':
      result = subtract(num1, num2);
      break;
  case '*':
      result = multiply(num1, num2);
      break;
  case '/':
      result = divide(num1, num2);
      break;
  default:
      result = "Невідома операція!";
}

console.log("Результат:", result);