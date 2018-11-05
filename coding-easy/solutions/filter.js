/**
 * Filter higher order function
 *
 * @param {Array} array
 * @param {Function} fn
 * @returns {Array}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter}
 */
function filter(array, fn) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];

    if (fn(current)) {
      result.push(current);
    }
  }

  return result;
}

module.exports = filter;
