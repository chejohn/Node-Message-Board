const assert = require("assert");

function CalculateFibonacci(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Input must be an integer.");
  }
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function RunTests() {
  // Test base cases
  assert.strictEqual(CalculateFibonacci(0), 0, "Fibonacci(0) should be 0");
  assert.strictEqual(CalculateFibonacci(1), 1, "Fibonacci(1) should be 1");
  // Test small numbers
  assert.strictEqual(CalculateFibonacci(2), 1, "Fibonacci(2) should be 1");
  assert.strictEqual(CalculateFibonacci(3), 2, "Fibonacci(3) should be 2");
  assert.strictEqual(CalculateFibonacci(4), 3, "Fibonacci(4) should be 3");
  assert.strictEqual(CalculateFibonacci(5), 5, "Fibonacci(5) should be 5");
  assert.strictEqual(CalculateFibonacci(10), 55, "Fibonacci(10) should be 55");
  // Test invalid input
  assert.throws(
    () => CalculateFibonacci(-1),
    /non-negative/,
    "Negative input should throw"
  );
  assert.throws(
    () => CalculateFibonacci(1.5),
    /integer/,
    "Non-integer input should throw"
  );
  assert.throws(
    () => CalculateFibonacci("5"),
    /integer/,
    "Non-number input should throw"
  );
  console.log("All tests passed!");
}

if (require.main === module) {
  RunTests();
}