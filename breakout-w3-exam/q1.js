"use strict";

/* Question 01

Convert an array of arrays into an object.

This is the inverse of the previous question.

Arrays will only have two elements: [key, value]

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples:

- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/

const arrayToObject = function(arr) {
  // return Object.fromEntries(arr);

  // create the return obj
  const returnObj = {};

  // loop through the array
  for (const subarray of arr) {
    // pull out the key and value from the subarray
    const key = subarray[0];
    const value = subarray[1];

    // add the key/value pair to the return obj
    returnObj[key] = value;
  }

  // return the obj we created
  return returnObj;
};

// Don't change below:
module.exports = { arrayToObject };
