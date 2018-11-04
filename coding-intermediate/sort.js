/**
 * Implement the sort function to sort an array of numbers in O(N×log(N)) time.
 *
 * @param {Array} array
 * @returns {Array}
 */

/// solution

function sort(array) {
  return array;
}

/// tests

describe('sort', () => {
  it('should return the sorted array #1', () => {
    expect(sort([])).toEqual([]);
  });

  it('should return the sorted array #2', () => {
    expect(sort([-4, 1, Infinity, 3, 3, 0])).toEqual([
      -4,
      0,
      1,
      3,
      3,
      Infinity,
    ]);
  });
});
