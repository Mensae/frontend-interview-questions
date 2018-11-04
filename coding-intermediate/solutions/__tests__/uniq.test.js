const uniq = require('../uniq');

describe('uniq', () => {
  it('should return the unique numbers #1', () => {
    expect(uniq([])).toEqual([]);
  });

  it('should return the unique numbers #2', () => {
    expect(uniq([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8]);
  });
});
