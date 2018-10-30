/**
 * Implement a HashMap class without using JavaScript’s built-in objects ({}) or
 * Maps.
 * You are provided a hash() function that takes a string and returns a number
 * (the numbers are mostly unique, but sometimes two different strings will
 * return the same number):
 * Your HashMap should support just 2 methods, get, set.
 * @see {@link https://en.wikipedia.org/wiki/Hash_table}
 */

/// solution

class HashMap {}

/// tests

import { test } from 'ava';

test('HashMap', t => {
  let map = new HashMap();
  map.set('abc', 123);
  map.set('foo', 'bar');
  map.set('foo', 'baz');
  t.is(map.get('abc'), 123);
  t.is(map.get('foo'), 'baz');
  t.is(map.get('def'), undefined);
});
