/**
 * Takes a string and returns true or false indicating whether its curly braces
 * are balanced.
 *
 * @param {string} string
 * @returns {boolean}
 */

/// solution

function isBalanced(string) {
  return false;
}

/// tests

describe('isBalanced', () => {
  it('should return "false"', () => {
    expect(isBalanced('}{')).toBe(false);
  });

  it('should return "false"', () => {
    expect(isBalanced('{{}')).toBe(false);
  });

  it('should return "true"', () => {
    expect(isBalanced('{}{}')).toBe(true);
  });

  it('should return "true"', () => {
    expect(isBalanced('foo { bar { baz } boo }')).toBe(true);
  });

  it('should return "false"', () => {
    expect(isBalanced('foo { bar { baz }')).toBe(false);
  });

  it('should return "false"', () => {
    expect(isBalanced('foo { bar } }')).toBe(false);
  });
});
