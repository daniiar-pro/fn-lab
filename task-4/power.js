/**
 * Recursively calculates the power of a base raised to an exponent.
 * @function power
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent (can be positive, zero, or negative).
 * @returns {number} - The result of base raised to the power of exponent.
 * @throws {TypeError} If either argument is not a number.
 */
export function power(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("Both base and exponent must be a numbers.");
  }

  if (exponent === 0) return 1;

  if (exponent < 0) {
    return 1 / power(base, -exponent);
  }

  return base * power(base, exponent - 1);
}

// console.log(power(2, 3)); // 8
// console.log(power(3, 0)); // 1
// console.log(power(2, -3)); // 0.125
// console.log(power(-2, 3)); // -8
// console.log(power(0, 3)); // 0

// console.log(power(-2, "3")); // Throws TypeError
// console.log(power("2", 3)); // Throws TypeError
