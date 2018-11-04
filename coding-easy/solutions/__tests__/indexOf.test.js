const indexOf = require('../indexOf');

describe('indexOf', () => {
  it('should return 0', () => {
    expect(indexOf([1, 2, 3], 1)).toBe(0);
  });

  it('should return -1', () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
  });
});
