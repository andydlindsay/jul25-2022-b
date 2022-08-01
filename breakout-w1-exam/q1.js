/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a variable to hold lowest value
  let lowestValue = arr[0];
  // let lowestValue = Infinity;

  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    // is the current element lower than our lowest value
    if (currentElement < lowestValue) {
      // if yes, replace lowest value with current element
      lowestValue = currentElement;
    }
  }

  // return the lowest value
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // return Math.max(...arr);

  // create a variable to hold the highest value
  let highestValue = arr[0];

  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // is the current element higher than our highest value
    const currentElement = arr[i];

    if (currentElement > highestValue) {
      // if yes, replace the highest value
      highestValue = currentElement;
    }
  }

  // return the highest value
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
