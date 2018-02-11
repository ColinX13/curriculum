/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b = a, sum = 0) => {
  if(a === 2) {
    return sum;
  }
  if(b % (a - 1) === 0) {
    sum += (a - 1);
  }
  return solution(a - 1, b, sum);
};

module.exports = {
  solution,
};
