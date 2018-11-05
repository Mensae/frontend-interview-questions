/**
 * Implement the reduce function.
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {*} value
 * @returns {*}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce}
 */
function reduce(array, fn, value) {
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    value = fn(value, current, i, array);
  }

  return value;
}

module.exports = reduce;
