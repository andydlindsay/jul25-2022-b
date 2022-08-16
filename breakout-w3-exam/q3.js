"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value:
[key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // create a return obj
  const returnObj = {};

  // loop through the provided arr
  for (const element of arr) {
    // pull out the key and value from the subarray
    const key = element[0];
    const value = element[1];

    // is the value an array?
    // if (Array.isArray(value)) {
    //   // if yes, then we need to use recursion
    //   returnObj[key] = deepArrayToObject(value);
    // } else {
    //   // else, add the key/value pair to the return obj
    //   returnObj[key] = value;
    // }

    returnObj[key] = Array.isArray(value) ? deepArrayToObject(value) : value;
  }

  // return the return obj
  return returnObj;
};

// Don't change below:
module.exports = { deepArrayToObject };
