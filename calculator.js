/**
 * Calculator module for performing basic arithmetic operations on two numbers
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * Calculates the remainder when first number is divided by second number
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/**
 * Raises first number to the power of second number
 * @param {number} a - Base number
 * @param {number} b - Exponent
 * @returns {number} a raised to the power of b
 */
function power(a, b) {
  validateNumbers(a, b);
  return Math.pow(a, b);
}

/**
 * Validates that both inputs are numbers
 * @param {*} a - First input
 * @param {*} b - Second input
 * @throws {Error} If either input is not a number
 */
function validateNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Both inputs must be numbers.");
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Inputs cannot be NaN.");
  }
}

/**
 * Performs a calculation based on the operation string
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Operation to perform (+, -, *, /, %, **)
 * @returns {number} Result of the operation
 * @throws {Error} If operation is not supported
 */
function calculate(a, b, operation) {
  switch (operation) {
    case '+':
    case 'add':
      return add(a, b);
    case '-':
    case 'subtract':
      return subtract(a, b);
    case '*':
    case 'multiply':
      return multiply(a, b);
    case '/':
    case 'divide':
      return divide(a, b);
    case '%':
    case 'modulo':
      return modulo(a, b);
    case '**':
    case 'power':
      return power(a, b);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

// Export all functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  calculate
};

// Example usage if run directly
if (require.main === module) {
  console.log('Calculator Examples:');
  console.log(`5 + 3 = ${add(5, 3)}`);
  console.log(`10 - 4 = ${subtract(10, 4)}`);
  console.log(`6 * 7 = ${multiply(6, 7)}`);
  console.log(`15 / 3 = ${divide(15, 3)}`);
  console.log(`17 % 5 = ${modulo(17, 5)}`);
  console.log(`2 ** 8 = ${power(2, 8)}`);
  
  console.log('\nUsing calculate function:');
  console.log(`calculate(10, 5, '+') = ${calculate(10, 5, '+')}`);
  console.log(`calculate(10, 5, '*') = ${calculate(10, 5, '*')}`);
}