/**
 * Implement the reduce function.
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {*} value
 * @returns {*}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce}
 */

/// solution

function reduce(array, fn, value) {
  return value;
}

/// tests

test('reduce', () => {
  expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
});
