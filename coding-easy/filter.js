/**
 * filter - Implement the filter function.
 *
 * @param {Array} array
 * @param {Function} fn
 * @returns {Array}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter}
 */

/// solution

function filter(array, fn) {
  return array;
}

/// tests

test('filter', () => {
  expect(filter([1, 2, 3, 4], n => n < 3)).toEqual([1, 2]);
});
