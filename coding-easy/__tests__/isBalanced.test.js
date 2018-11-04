const isBalanced = require('../isBalanced');

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
