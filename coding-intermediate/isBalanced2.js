/**
 * Like the isBalanced function you implemented before, but supports 3 types of
 * braces: curly {}, square [], and round ().
 * A string with interleaving braces should return false.
 *
 * @param {string} string
 * @returns {boolean}
 */

/// solution

function isBalanced2(string) {
  return false;
}

/// tests

describe('isBalanced2', () => {
  it('should return "true"', () => {
    expect(isBalanced2('(foo { bar (baz) [boo] })')).toBe(true);
  });

  it('should return "false"', () => {
    expect(isBalanced2('foo { bar { baz }')).toBe(false);
  });

  it('should return "false"', () => {
    expect(isBalanced2('foo { (bar [baz] } )')).toBe(false);
  });
});
