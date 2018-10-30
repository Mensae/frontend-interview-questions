/**
 * Takes an array of numbers, and returns the unique numbers. Can you do it in
 * O(N) time?
 * @param array
 * @returns {Object[]}
 */

/// solution

function uniq(array) {
  return array;
}

/// tests

import { test } from 'ava';

test(t => t.deepEqual(uniq([]), []));
test(t => t.deepEqual(uniq([1, 4, 2, 2, 3, 4, 8]), [1, 4, 2, 3, 8]));
