const seq = require('../seq');

describe('seq', () => {
  const a = () => Promise.resolve('a');
  const b = () => Promise.resolve('b');
  const c = () => Promise.resolve('c');

  it('should pass #1', async () => {
    expect(await seq([a, b, c])).toEqual(['a', 'b', 'c']);
  });

  it('should pass #2', async () => {
    expect(await seq([a, c, b])).toEqual(['a', 'c', 'b']);
  });
});
