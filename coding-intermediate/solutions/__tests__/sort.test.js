const sort = require('../sort');

describe('sort', () => {
  it('should return the sorted array #1', () => {
    expect(sort([])).toEqual([]);
  });

  it('should return the sorted array #2', () => {
    expect(sort([-4, 1, Infinity, 3, 3, 0])).toEqual([
      -4,
      0,
      1,
      3,
      3,
      Infinity,
    ]);
  });
});
