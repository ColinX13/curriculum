/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, str) => {
  let rtnStr = '';
  for(i = 0; i < n; i++) {
    rtnStr += str;
  }
  return rtnStr;
};

module.exports = {
  solution,
};
