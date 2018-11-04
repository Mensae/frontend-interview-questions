const intersection = require('../intersection');

describe('intersection', () => {
  it('should return [4, 1]', () => {
    expect(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])).toEqual([4, 1]);
  });

  it('should return []', () => {
    expect(intersection([1, 5, 4, 2], [7, 12])).toEqual([]);
  });
});
