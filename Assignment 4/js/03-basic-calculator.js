// IMPORT THE MODULE
import { add, subtract, multiply, divide } from './modules/calculator.js';
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

let num1 = Number(prompt('Please pick a number.'));
let num2 = Number(prompt('Please pick a second number.'));
let operation = prompt('Please pick an operation: Add, Subtract, Multiply or Divide.');
operation = operation.toLowerCase();
var validOperation = false
while (validOperation == false) {
    if (operation == 'add' || operation == 'subtract' || operation == 'multiply' || operation == 'divide'){
        validOperation = true
    } else {
        validOperaton = false
        operation = prompt("You entered an invalid choice. Please enter Add, Subtract, Multiply or Divide.");
        operation = operation.toLowerCase();
    }
} 
console.log(num1, num2, operation);

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
let result;
switch(operation) {
    case 'add':
        result = add(num1, num2);
        break;
    case 'subtract':
        result = subtract(num1, num2);
        break;
    case 'multiply':
        result = multiply(num1, num2);
        break;
    case 'divide':
        result = divide(num1, num2);
        break;
}

alert(`The result is ${result}`)
