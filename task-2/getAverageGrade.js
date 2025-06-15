import { average } from "../utilities.js";

/**
 * @typedef {Object} Student
 * @property {string} name  – The student’s name.
 * @property {number} grade – The student’s numeric grade (0–100).
 */

/**
 * Extracts the `grade` property from each student.
 * @param {Student[]} students
 * @returns {number[]} An array of grades.
 * @throws {TypeError} If `students` is not an array of objects with numeric `grade`.
 */
function pluckGrades(students) {
  if (
    !Array.isArray(students) ||
    students.some(
      (s) =>
        typeof s !== "object" ||
        s === null ||
        typeof s.grade !== "number" ||
        Number.isNaN(s.grade)
    )
  ) {
    throw new TypeError(
      "pluckGrades expects an array of student objects with numeric `grade` properties."
    );
  }
  return students.map(({ grade }) => grade);
}

/**
 * Calculates the average grade from a list of students.
 *
 * @param {Student[]} students – Array of students.
 * @returns {number} The average grade (0–100).
 * @throws {TypeError} If `students` is not a valid array of Student objects.
 * @throws {RangeError} If `students` is empty.
 */
export function getAverageGrade(students) {
  const grades = pluckGrades(students);
  return average(grades);
}

const STUDENTS = [
  { name: "Daniiar", grade: 100 },
  { name: "John", grade: 30 },
  { name: "Jack", grade: 87 },
  { name: "Sally", grade: 69 },
];

console.log(getAverageGrade(STUDENTS)); // 71.5
// console.log(getAverageGrade({grade: 100})); // TypeError: pluckGrades expects an array of student objects with numeric `grade` properties.
