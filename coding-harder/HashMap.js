/**
 * Implement a HashMap class without using JavaScript’s built-in objects ({}) or
 * Maps.
 * You are provided a hash() function that takes a string and returns a number
 * (the numbers are mostly unique, but sometimes two different strings will
 * return the same number):
 * Your HashMap should support just 2 methods, get, set.
 *
 * @see {@link https://en.wikipedia.org/wiki/Hash_table}
 */

/// solution

class HashMap {}

/// tests

describe('HashMap', () => {
  const map = new HashMap();

  it('should have a "set" method', () => {
    const setSpy = jest.spyOn(map, 'set');
    map.set('abc', 123);
    map.set('foo', 'bar');
    map.set('foo', 'baz');
    expect(setSpy).toHaveBeenCalledTimes(3);
  });

  it('should have a "get" method', () => {
    expect(map.get('abc')).toBe(123);
    expect(map.get('foo')).toBe('baz');
    expect(map.get('def')).toBe(undefined);
  });
});
