/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, s = a) => {
  a = b
  b = s % b;
  if(b == 0) return a;
  return solution(a, b, s = a);
};

module.exports = {
  solution,
};
