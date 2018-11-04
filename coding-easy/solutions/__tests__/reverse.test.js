const reverse = require('../reverse');

describe('reverse', () => {
  it('should return ""', () => {
    expect(reverse('')).toBe('');
  });

  it('should return "fedcba"', () => {
    expect(reverse('abcdef')).toBe('fedcba');
  });
});
