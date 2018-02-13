/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, b = a, sum = 0) => {
  if(a <= 0) {
    if(sum === b + 1) {
      return true;
    }
    else {
      return false;
    }
  }
  if(b % a === 0) {
    sum += a;
  }
  return solution(a - 1, b, sum);
};

module.exports = {
  solution,
};
