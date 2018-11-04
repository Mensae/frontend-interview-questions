const isSorted = require('../isSorted');

describe('isSorted', () => {
  it('should return "true"', () => {
    expect(isSorted([])).toBe(true);
  });

  it('should return "true"', () => {
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true);
  });

  it('should return "false"', () => {
    expect(isSorted([3, 9, -3, 10])).toBe(false);
  });
});
