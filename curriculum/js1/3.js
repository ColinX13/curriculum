/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x) => {
  let str = '';
  for(i = 0; i < x; i++){
    str = str + 'hello';
  }
  return str;
};

module.exports = {
  solution,
};
