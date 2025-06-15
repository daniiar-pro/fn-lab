/**
 * Returns a sorted array of unique words extracted from the input string.
 * Filters out non-alphanumeric characters and treats words case-insensitively.
 * @param {string} text - The input text to extract words from.
 * @returns {string[]} - Alphabetically sorted array of unique words.
 */
export function filterUniqueWords(text) {
  if (typeof text !== "string") {
    throw new Error(
      "filterUniqueWords function expects a string of text as an argument"
    );
  }

  return Array.from(
    new Set(
      text.toLowerCase().match(/\b[a-z0-9]+\b/g) || [] // match alphanumeric words only
    )
  ).sort();
}

console.log(filterUniqueWords("Hi bye hello hi apple")); // → [ 'apple', 'bye', 'hello', 'hi' ]
console.log(filterUniqueWords("Hello, HELLO! Bye... hi")); // → ['bye', 'hello', 'hi']
console.log(filterUniqueWords("123 456 789")); // → ['123', '456', '789']
console.log(filterUniqueWords("[]{}^^ ihifdfaie1 @#$%^&*!")); // → ['ihifdfaie1']
console.log(filterUniqueWords("12123-$% abc123 123abc hello")); // → ['12123', '123abc', 'abc123', 'hello']
console.log(filterUniqueWords("1892383")); //[ '1892383' ]
console.log(filterUniqueWords("!!! ,,, ... @@@ ###")); // → [] (No words)

// console.log(filterUniqueWords([])); // "filterUniqueWords function expects a string of text as an argument"
