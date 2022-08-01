/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr.length;
  return length;

  // return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // create a variable to hold the running total
  // let runningTotal = 0;

  // // loop at each element in the array: loop
  // for (let i = 0; i < arr.length; i++) {
  //   // take current element and add to running total
  //   const currentElement = arr[i];

  //   // runningTotal = runningTotal + currentElement;
  //   runningTotal += currentElement;
  // }

  // // return the running total
  // return runningTotal;

  const result = arr.reduce((a, c) => a + c, 0);

  // const result = arr.reduce((runningTotal, currentElement) => {
  //   return runningTotal + currentElement;
  // }, 0);

  return result;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

// 3.14158
// 314.158
// 314
// 3.14

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (arr.length === 0) {
    return null;
  }

  // average = sumOfNumbers / numberOfElements
  const numberOfElements = count(arr);
  const sumOfNumbers = sum(arr);

  const average = sumOfNumbers / numberOfElements;

  const rounded = round(average);

  return rounded;
};

// Don't change below:
module.exports = { count, sum, mean };
