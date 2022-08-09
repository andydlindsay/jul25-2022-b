"use strict";

/* Question 04

Implement the function as defined below.

Given an array of values, the minmax() function will return an array that
contains the minimum and maximum values in the array, always with minimum
at index 0 and maximum at index 1. For the purposes of this question, you
are not allowed to use Math.max() or Math.min().

The array can be a list of lower-cased strings instead of numbers. In this
case, min is the string that would be sorted first alphabetically and max
is the string that would be sorted last alphabetically ("a" < "b", while
"ab" > "aa", and so on).

Mixed-type (strings and numbers) arrays are not of concern to us (meaning,
  do not worry about this situation).

Examples:

- minmax([1, 2, 3, 4, 5]) returns [1, 5]
- minmax([90, 89, 123, 3]) returns [3, 123]
- minmax(["apple", "banana", "canada"]) returns ["apple", "canada"]
- minmax([]) returns [undefined, undefined]

*/

// const minmax = function(list) {
//   if (typeof list[0] === 'number') {
//     list.sort((a, b) => {
//       return a - b;
//     });
//   } else {
//     list.sort();
//   }
//   return [list[0], list[list.length - 1]];
// };

// const minmax = function(list) {
//   if (list.length === 0) {
//     return [undefined, undefined];
//   }
//   const slicedList = list.slice(0);
//   const strBool = (typeof(slicedList[0]) === 'string');
//   strBool ? slicedList.sort() : slicedList.sort((a, b) => a - b);
//   let min = slicedList[0];
//   let max = slicedList[slicedList.length - 1];
//   return [min, max];
// };

// const minmax = function(list) {
//   let final = [];
//   let array = list;
//   if (list.length === 0) {
//     return final = [undefined, undefined];
//   }
//   for (let x = 0; x < list.length; x++) {
//     if (!Number.isFinite(list[x])) {
//       array.sort();
//       final.push(array[0], array[array.length - 1]);
//       // return final;
//     } else {
//       array = list.sort((a, b) => a - b);
//       final.push(array[0], array[array.length - 1]);
//     }
//     return final;
//   }
// };


const minmax = function(list) {
  if (list.length === 0) {
    return [undefined, undefined];
  }

  list.sort();

  if (typeof list[0] === 'number') {
    list.sort(function (a, b) {
      return a - b;
    });
  }

  return [list[0], list[list.length - 1]];
};

// Don't change below:

module.exports = { minmax };
