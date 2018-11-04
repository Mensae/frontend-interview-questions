/**
 * Implementation of the indexOf function for arrays.
 * @param {Array} array
 * @param {*} item
 * @returns {number} [0|-1]
 * @see {@link https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 */
function indexOf(array, item) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

module.exports = indexOf;
