/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (x, fx) => {
  if(x <= 0) {
    return ;
  }
  fx();
  return solution(x - 1, fx);
};

module.exports = {
  solution,
};
