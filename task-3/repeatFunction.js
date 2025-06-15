/**
 * Returns a function that, when invoked, repeats a callback a specified number of times,
 * or indefinitely if the count is negative.
 *
 * @param {Function} callbackFunc - The function to repeat.
 * @param {number} num - The number of times to repeat the function. Negative for infinite repetition.
 * @returns {Function | undefined} - If `num` is negative, returns a cancel function to stop the infinite loop. Otherwise, returns undefined.
 * @throws {TypeError} If `callbackFunc` is not a function or `num` is not an integer.
 */
export function repeatFunction(callbackFunc, num) {
  if (typeof callbackFunc !== "function") {
    throw new TypeError("First argument must be a function.");
  }

  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new TypeError("Second argument must be an integer.");
  }

  if (num < 0) {
    const intervalId = setInterval(callbackFunc, 0);
    return () => {
      clearInterval(intervalId);
      console.log("Infinite loop stopped.");
    };
  }

  for (let i = 0; i < num; i++) {
    callbackFunc(i);
  }

  return;
}

function callbackFn(count) {
  console.log(`Callback function ${count} times invoked!`);
}

function infiniteCallbackFn() {
  console.log(`BE CAUTIOUS INFINITE LOOP!!!`);
}

// Finite run
repeatFunction(callbackFn, 10);

// Infinite run (stopped after 1 second)
// const stopInfiniteLoop = repeatFunction(infiniteCallbackFn, -1);
// setTimeout(() => {
//   stopInfiniteLoop();
// }, 1000);
