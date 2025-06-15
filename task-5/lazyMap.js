/**
 * Lazily maps an array using a provided function, one element at a time.
 * @function lazyMap
 * @param {Array} arr - The array to map over.
 * @param {Function} mappingFunc - The mapping function to apply lazily.
 * @returns {{
 *  next: () => { value: any, done: boolean}
 * }} An object with a `next()` method that returns the next mapped value.
 * @throws {TypeError} If `array` is not an array or `mappingFunc` is not a function.
 */
export function lazyMap(arr, mappingFunc) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an arr.");
  }

  if (typeof mappingFunc !== "function") {
    throw new TypeError("Second argument must be a function");
  }

  let index = 0;

  return {
    next: () => {
      if (index < arr.length) {
        const value = mappingFunc(arr[index]);
        index++;
        return { value, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

// const array = [1, 2, 3];
// const lazyMapping = lazyMap(array, (n) => n * 10);
// console.log(lazyMapping.next()); // 10
// console.log(lazyMapping.next()); // 20
// console.log(lazyMapping.next()); // 30
// console.log(lazyMapping.next()); // { value: undefined, done: true } End of the arr

// const userObj = {name: "Daniiar", age: 40};
// const lazyObj = lazyMap(userObj, (val) => console.log(val)) // Throws TypeError: First argument must be an arr.

// const array = [1, 2, 3];
// const lazyMapping = lazyMap(array, 10); //TypeError: Second argument must be a function
