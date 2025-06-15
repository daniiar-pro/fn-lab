/**
 * Sums an array of numbers.
 * @param {number[]} numbers
 * @returns {number} The total sum.
 * @throws {TypeError} If `numbers` is not an array of numbers.
 */
export function sum(numbers) {
  if (
    !Array.isArray(numbers) ||
    numbers.some((n) => typeof n !== "number" || Number.isNaN(n))
  ) {
    throw new TypeError("sum expects an array of numbers.");
  }
  return numbers.reduce((acc, n) => acc + n, 0);
}

/**
 * Computes the arithmetic mean of an array of numbers.
 * @param {number[]} numbers
 * @returns {number} The average value.
 * @throws {TypeError} If `numbers` is not a non-empty array of numbers.
 * @throws {RangeError} If `numbers` is empty.
 */
export function average(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("average expects an array of numbers.");
  }
  if (numbers.length === 0) {
    throw new RangeError("Cannot compute average of an empty array.");
  }
  return sum(numbers) / numbers.length;
}
