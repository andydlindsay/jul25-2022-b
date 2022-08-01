/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create the stacks

  // create an object to hold our stacks
  const stacks = {};

  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    // have we seen the current element before
    if (stacks[currentElement]) {
      // if yes, increment the number of times seen
      stacks[currentElement] += 1;
    } else {
      // if no, create a new key/value pair in stacks
      stacks[currentElement] = 1;
    }
  }

  // console.log(stacks);

  // which stack is the tallest?

  // create two variables: one for key and one for highest value
  let highestKey = null;
  let highestValue = 0;

  // loop through stacks
  for (const key in stacks) {
    // is the current value highest than our highest?
    const currentValue = stacks[key];

    if (currentValue > highestValue) {
      // if yes, replace the current highest AND the highest key
      highestKey = key;
      highestValue = currentValue;
    }
  }

  // return the highest key
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };
