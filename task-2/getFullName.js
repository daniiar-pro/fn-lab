// checker function from HOMEWORK 2 (npm package: "coercia")
import { isPlainObject } from "coercia";

const person = {
  firstName: "Daniiar",
  lastName: "Abdraiymov",
};

/**
 * Returns the full name of a person by combining firstName and lastName.
 * @param {Object} person - A plain object with `firstName` and `lastName` string properties.
 * @returns {string} The full name in the format "FirstName LastName".
 * @throws {Error} If the input is not a valid plain object with the required properties.
 */
export function getFullName(person) {
  if (!isPlainObject(person)) {
    throw new Error(
      "Expected a plain object with firstName and lastName properties."
    );
  }
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
}

console.log(getFullName(person)); // Daniiar Abdraiymov
// console.log(getFullName()); // Throws an Error, argument is not provided
// console.log(getFullName({ name: "Daniiar", age: 50 })); // Throws an Error, firstName and lastName properties are missing.
