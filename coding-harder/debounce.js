/**
 * Implement the debounce function.
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 * @see {@link https://lodash.com/docs/4.17.4#debounce}
 */

/// solution

function debounce(fn, delay = 0) {
  return () => {};
}

/// tests

import { test } from 'ava';

test.cb(t => {
  t.plan(1);
  let count = 0;
  let a = () => {
    count++;
    t.is(count, 1);
    t.end();
  };
  let b = debounce(a, 100);
  b();
  b();
  b();
});
