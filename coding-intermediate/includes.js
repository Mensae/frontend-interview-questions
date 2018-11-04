/**
 * Return true or false indicating whether the given number appears in the given
 * sorted array. Can you do it in O(log(N)) time?
 *
 * @param {Array} array
 * @param {number} number
 * @returns {boolean}
 */

/// solution

function includes(array, number) {
  return false;
}

/// tests

describe('includes', () => {
  it('should return "true"', () => {
    expect(includes([1, 3, 8, 10], 8)).toBe(true);
  });

  it('should return "true"', () => {
    expect(includes([1, 3, 8, 8, 15], 15)).toBe(true);
  });

  it('should return "false"', () => {
    expect(includes([1, 3, 8, 10, 15], 9)).toBe(false);
  });
});
