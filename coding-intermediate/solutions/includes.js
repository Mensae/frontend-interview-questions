/**
 * Return true or false indicating whether the given number appears in the given
 *
 * Note: We use a binary search to quickly search the given sorted array for the given number.
 *
 * @param {Array} array
 * @param {number} number
 * @returns {boolean}
 */
function includes(array, number) {
  const index = binarySearch(array, number, 0, array.length - 1);
  return index !== undefined;
}

/**
 *
 * @param {Array} array
 * @param {number} number
 * @param {number} leftIndex
 * @param {number} rightIndex
 * @returns {number|undefined}
 */
function binarySearch(array, number, leftIndex, rightIndex) {
  const midIndex = Math.floor((rightIndex + leftIndex) / 2);
  const current = array[midIndex];

  if (rightIndex < leftIndex) {
    return undefined;
  }

  if (number === current) {
    return midIndex;
  }

  if (number < current) {
    return binarySearch(array, number, leftIndex, midIndex - 1);
  }

  return binarySearch(array, number, midIndex + 1, rightIndex);
}

module.exports = includes;
