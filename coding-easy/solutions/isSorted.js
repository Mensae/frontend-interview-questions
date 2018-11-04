/**
 * Returns true or false, indicating whether the given array of numbers is
 * sorted.
 *
 * @param {Array} array
 * @returns {boolean}
 */
function isSorted(array) {
  for (let i = 0; i < array.length; i += 1) {
    let current = array[i];
    let next = array[i + 1];

    if (next && current > next) {
      // exit as soon as we know the array isn't sorted
      return false;
    }
  }

  return true;
}

module.exports = isSorted;
