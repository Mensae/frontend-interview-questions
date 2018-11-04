/**
 * Returns true or false, indicating whether the given array of numbers is
 * sorted.
 *
 * @param {Array} array
 * @returns {boolean}
 */

/// solution

function isSorted(array) {
  return false;
}

/// tests

describe('isSorted', () => {
  it('should return "true"', () => {
    expect(isSorted([])).toBe(true);
  });

  it('should return "true"', () => {
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true);
  });

  it('should return "false"', () => {
    expect(isSorted([3, 9, -3, 10])).toBe(false);
  });
});
