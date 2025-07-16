const assert = require("assert");

/**
 * Calculates the nth Fibonacci number using iterative approach
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} The nth Fibonacci number
 * @throws {Error} If input is not a non-negative integer
 */
function calculateFibonacci(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Input must be an integer.");
  }
  
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  let next;

  for (let i = 2; i <= n; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

/**
 * Runs comprehensive tests for the calculateFibonacci function
 */
function runFibonacciTests() {
  console.log("Running Fibonacci tests...");

  // Test base cases
  assert.strictEqual(
    calculateFibonacci(0), 
    0, 
    "Fibonacci(0) should be 0"
  );
  assert.strictEqual(
    calculateFibonacci(1), 
    1, 
    "Fibonacci(1) should be 1"
  );

  // Test small numbers
  assert.strictEqual(
    calculateFibonacci(2), 
    1, 
    "Fibonacci(2) should be 1"
  );
  assert.strictEqual(
    calculateFibonacci(3), 
    2, 
    "Fibonacci(3) should be 2"
  );
  assert.strictEqual(
    calculateFibonacci(4), 
    3, 
    "Fibonacci(4) should be 3"
  );
  assert.strictEqual(
    calculateFibonacci(5), 
    5, 
    "Fibonacci(5) should be 5"
  );
  assert.strictEqual(
    calculateFibonacci(6), 
    8, 
    "Fibonacci(6) should be 8"
  );
  assert.strictEqual(
    calculateFibonacci(10), 
    55, 
    "Fibonacci(10) should be 55"
  );

  // Test larger numbers
  assert.strictEqual(
    calculateFibonacci(15), 
    610, 
    "Fibonacci(15) should be 610"
  );

  // Test error cases - negative input
  assert.throws(
    () => calculateFibonacci(-1),
    {
      name: "Error",
      message: "Input must be a non-negative integer."
    },
    "Negative input should throw appropriate error"
  );

  // Test error cases - non-integer input
  assert.throws(
    () => calculateFibonacci(1.5),
    {
      name: "Error",
      message: "Input must be an integer."
    },
    "Non-integer input should throw appropriate error"
  );

  // Test error cases - non-number input
  assert.throws(
    () => calculateFibonacci("5"),
    {
      name: "Error",
      message: "Input must be an integer."
    },
    "Non-number input should throw appropriate error"
  );

  // Test error cases - null input
  assert.throws(
    () => calculateFibonacci(null),
    {
      name: "Error",
      message: "Input must be an integer."
    },
    "Null input should throw appropriate error"
  );

  // Test error cases - undefined input
  assert.throws(
    () => calculateFibonacci(undefined),
    {
      name: "Error",
      message: "Input must be an integer."
    },
    "Undefined input should throw appropriate error"
  );

  console.log("All Fibonacci tests passed! ✅");
}

/**
 * Utility function to demonstrate Fibonacci sequence
 * @param {number} count - Number of Fibonacci numbers to display
 */
function displayFibonacciSequence(count = 10) {
  console.log(`\nFirst ${count} Fibonacci numbers:`);
  const sequence = [];
  
  for (let i = 0; i < count; i++) {
    sequence.push(calculateFibonacci(i));
  }
  
  console.log(sequence.join(", "));
}

// Export functions for potential use in other modules
module.exports = {
  calculateFibonacci,
  runFibonacciTests,
  displayFibonacciSequence
};

// Run tests and demo if this file is executed directly
if (require.main === module) {
  runFibonacciTests();
  displayFibonacciSequence();
}