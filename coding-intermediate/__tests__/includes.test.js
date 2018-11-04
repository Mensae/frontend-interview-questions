const includes = require('../includes');

describe('includes', () => {
  it('should return "true"', () => {
    expect(includes([1, 3, 8, 10], 8)).toBe(true);
  });

  it('should return "true"', () => {
    expect(includes([1, 3, 8, 8, 15], 15)).toBe(true);
  });

  it('should return "false"', () => {
    expect(includes([1, 3, 8, 10, 15], 9)).toBe(false);
  });
});
