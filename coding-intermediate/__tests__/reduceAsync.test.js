const reduceAsync = require('../reduceAsync');

describe('reduceAsync', () => {
  const a = () => Promise.resolve('a');
  const b = () => Promise.resolve('b');
  const c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

  it('should pass #1', async () => {
    expect(
      await reduceAsync([a, b, c], (acc, value) => [...acc, value], []),
    ).toEqual(['a', 'b', 'c']);
  });

  it('should pass #2', async () => {
    expect(
      await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']),
    ).toEqual(['d', 'a', 'c', 'b']);
  });
});
