/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b = a) => {
  if(a > b) {
    if(a % 7 == 0) return a;
  }
  return solution(a + 1, b)
};

module.exports = {
  solution,
};
