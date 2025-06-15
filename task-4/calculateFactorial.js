/**
 * Calculates the factorial of a non-negative integer using tail recursion.
 * @param {number} num - A non-negative integer whose factorial is to be calculated.
 * @returns {number} - The factorial of the input number.
 * @throws {TypeError} If `num` is not a number or is not an integer
 * @throws {RangeError} If `num` is negative
 */
export function calculateFactorial(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new TypeError("Input must be an integer");
  }

  if (num < 0) {
    throw new RangeError("Factorial is not defined for negative numbers.");
  }

  function factorialHelperFn(n, acc = 1) {
    if (n === 0 || n === 1) return acc;
    return factorialHelperFn(n - 1, acc * n);
  }
  return factorialHelperFn(num);
}

// console.log(calculateFactorial(5)); // 120
// console.log(calculateFactorial(6)); // 720

// console.log(calculateFactorial(6.7)); // Throws an TypeError
// console.log(calculateFactorial("10")); // Throws an TypError
// console.log(calculateFactorial(-10)); // Throws an RangeError
