/**
 * Creates a counter with encapsulated state and methods to interact with it.
 *
 * @function createCounter
 * @param {number} [initialValue=0] - The initial value of the counter.
 * @throws {TypeError} Throws if `initialValue` is not a number.
 * @returns {{
 *   increment: () => number,
 *   decrement: () => number,
 *   reset: () => void,
 *   getCount: () => number
 * }} An object containing:
 * - `increment`: Increases the count by 1 and returns the updated value.
 * - `decrement`: Decreases the count by 1 and returns the updated value.
 * - `reset`: Resets the count to 0.
 * - `getCount`: Returns the current count without modifying it.
 */
export function createCounter(initialValue = 0) {
  if (typeof initialValue !== "number" || Number.isNaN(initialValue)) {
    throw new TypeError(
      "The argument to createCounter must be a valid number."
    );
  }

  let count = initialValue;

  const increment = () => ++count;
  const decrement = () => --count;
  const reset = () => (count = 0);
  const getCount = () => count;

  return {
    increment,
    decrement,
    reset,
    getCount,
  };
}

// Counter starting at 0
const counterOne = createCounter();
console.log(counterOne.getCount()); // 0
console.log(counterOne.increment()); // 1
console.log(counterOne.increment()); // 2
console.log(counterOne.getCount()); // 2

// // Counter starting at 10
// const counterTwo = createCounter(10);
// console.log(counterTwo.getCount()); // 10
// console.log(counterTwo.increment()); // 11
// console.log(counterTwo.increment()); // 12
// console.log(counterTwo.getCount()); // 12

// Optional: decrement and reset methods can you used too.
// const counterThree = createCounter();
// console.log(counterThree.getCount()); // 0
// console.log(counterThree.increment()); // 1
// console.log(counterThree.increment()); // 2
// console.log(counterThree.decrement()); // 1
// console.log(counterThree.reset()); // 0

// Throws an Error
// const invalidCounter = createCounter("0"); // Error: createCounter function expects a number argument
// console.log(invalidCounter.getCount());
// console.log(invalidCounter.increment());
