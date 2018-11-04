const HashMap = require('../HashMap');

describe('HashMap', () => {
  const map = new HashMap();

  it('should have a "set" method', () => {
    const setSpy = jest.spyOn(map, 'set');
    map.set('abc', 123);
    map.set('foo', 'bar');
    map.set('foo', 'baz');
    expect(setSpy).toHaveBeenCalledTimes(3);
    setSpy.mockRestore();
  });

  it('should have a "get" method', () => {
    expect(map.get('abc')).toBe(123);
    expect(map.get('foo')).toBe('baz');
    expect(map.get('def')).toBe(undefined);
  });
});
