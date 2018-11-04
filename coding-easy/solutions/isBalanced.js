/**
 * Takes a string and returns true or false indicating whether its curly braces
 * are balanced.
 *
 * @param {string} string
 * @returns {boolean}
 */
function isBalanced(string) {
  let count = 0;

  for (let letter of string) {
    if (letter === '{') {
      count++;
    }

    if (letter === '}') {
      count--;

      // if a closing bracket doesn't have a matching
      // opening bracket, we should return early.
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
}

module.exports = isBalanced;
