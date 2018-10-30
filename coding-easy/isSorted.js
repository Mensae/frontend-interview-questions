/**
 * Returns true or false, indicating whether the given array of numbers is
 * sorted.
 * @param {Object[]} array
 * @returns {boolean}
 */

/// solution

function isSorted(array) {
  return false;
}

/// tests

import { test } from 'ava';

test(t => t.is(isSorted([]), true));
test(t => t.is(isSorted([-Infinity, -5, 0, 3, 9]), true));
test(t => t.is(isSorted([3, 9, -3, 10]), false));
