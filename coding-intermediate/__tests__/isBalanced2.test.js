const isBalanced2 = require('../isBalanced2');

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
