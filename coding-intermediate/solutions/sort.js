/**
 * This is an implementation of the Mergesort algorithm.
 * There are other O(N * log(N)) sort algorithms, but
 * this is probably the simplest.
 *
 * @param {Array} array
 * @returns {Array}
 */
function sort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(sort(left), sort(right));
}

/**
 *
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */
function merge(left, right) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    result.push(
      left[indexLeft] < right[indexRight]
        ? left[indexLeft++]
        : right[indexRight++],
    );
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

module.exports = sort;
