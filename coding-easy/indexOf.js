/**
 * Implement the indexOf function for arrays.
 *
 * @param {Array} array
 * @param {*} item
 * @returns {number} [0|-1]
 * @see {@link https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 */

/// solution

function indexOf(array, item) {
  return -1;
}

/// tests

describe('indexOf', () => {
  it('should return 0', () => {
    expect(indexOf([1, 2, 3], 1)).toBe(0);
  });

  it('should return -1', () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
  });
});
