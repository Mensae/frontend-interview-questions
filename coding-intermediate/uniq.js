/**
 * Takes an array of numbers, and returns the unique numbers. Can you do it in
 * O(N) time?
 *
 * @param array
 * @returns {Object[]}
 */

/// solution

function uniq(array) {
  return array;
}

/// tests

describe('uniq', () => {
  it('should return the unique numbers #1', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should return the unique numbers #2', () => {
    expect(uniq([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8]);
  });
});
