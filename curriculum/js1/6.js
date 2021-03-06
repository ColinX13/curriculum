/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b = a - 1, sum = 0) => {
  if(b === 1) {
    return sum;
  }
  if(a % b  === 0) {
    sum += b;
  }
  return solution(a, b - 1, sum);
};

module.exports = {
  solution,
};
