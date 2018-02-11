/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (X, fx) => {
  if(X <= 0) {
    return ;
  }
  fx();
  return solution(X - 1, fx);
};

module.exports = {
  solution,
};
