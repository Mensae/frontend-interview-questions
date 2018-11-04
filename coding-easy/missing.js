/**
 * Takes an unsorted array of unique numbers (ie. no repeats) from 1 through
 * some number n, and returns the missing number in the sequence (there are
 * either no missing numbers, or exactly one missing number).
 * Can you do it in O(N) time? Hint: There’s a clever formula you can use.
 *
 * @param {Array} array
 * @returns {number|undefined}
 */

/// solution

function missing(array) {
  return -1;
}

/// tests

describe('missing', () => {
  it('should return "undefined"', () => {
    expect(missing([])).toBe(undefined);
  });

  it('should return "2"', () => {
    expect(missing([1, 4, 3])).toBe(2);
  });

  it('should return "1"', () => {
    expect(missing([2, 3, 4])).toBe(1);
  });

  it('should return "3"', () => {
    expect(missing([5, 1, 4, 2])).toBe(3);
  });

  it('should return "undefined"', () => {
    expect(missing([1, 2, 3, 4])).toBe(undefined);
  });
});
