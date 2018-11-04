/**
 * Return an array of strings, containing every permutation of the given string.
 *
 * @param {string} string
 * @returns {Array}
 */

/// solution

function permute(string) {
  return [];
}

/// tests

describe('permute', () => {
  it('should pass', () => {
    expect(permute('')).toEqual([]);
    expect(permute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });
});
