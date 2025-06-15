/**
 * Creates a lazy Fibonacci sequence generator.
 * Each call to `next()` returns the next Fibonacci number.
 * @function fibonacciGenerator
 * @returns { { next: () => { value: number, done: false } } } An object with the next Fibonacci number and `done` is always `false`.
 */
export function fibonacciGenerator() {
  let i = 0;
  let j = 1;

  return {
    next: () => {
      const currentValue = i;
      [i, j] = [j, i + j];
      return { currentValue, done: false };
    },
  };
}

const infiniteFib = fibonacciGenerator();
console.log(infiniteFib.next()); // 0
console.log(infiniteFib.next()); // 1
console.log(infiniteFib.next()); // 1
console.log(infiniteFib.next()); // 1
console.log(infiniteFib.next()); // 2
console.log(infiniteFib.next()); // 3
console.log(infiniteFib.next()); // 5
// Infinite...
