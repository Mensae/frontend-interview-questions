/**
 * Find the intersection of two arrays. Can you do it in O(M+N) time (where M
 * and N are the lengths of the two arrays)?
 *
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */

/// solution

function intersection(left, right) {
  return [];
}

/// tests

describe('intersection', () => {
  it('should return [4, 1]', () => {
    expect(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual([4, 1]);
  });

  it('should return []', () => {
    expect(intersection([1, 5, 4, 2], [7, 12])).toEqual([]);
  });
});
