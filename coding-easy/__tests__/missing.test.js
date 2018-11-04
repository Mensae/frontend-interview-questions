const missing = require('../missing');

describe('missing', () => {
  it('should return "undefined"', () => {
    expect(missing([])).toBe(undefined);
  });

  it('should return "2"', () => {
    expect(missing([1, 4, 3])).toBe(2);
  });

  it('should return "1"', () => {
    expect(missing([2, 3, 4])).toBe(1);
  });

  it('should return "3"', () => {
    expect(missing([5, 1, 4, 2])).toBe(3);
  });

  it('should return "undefined"', () => {
    expect(missing([1, 2, 3, 4])).toBe(undefined);
  });
});
