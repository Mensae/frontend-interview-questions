const permute = require('../permute');

describe('permute', () => {
  it('should pass', () => {
    expect(permute('')).toEqual([]);
    expect(permute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });
});
