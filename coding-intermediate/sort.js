/**
 * Implement the sort function to sort an array of numbers in O(N×log(N)) time.
 * @param {Array} array
 * @returns {Array}
 */

/// solution

function sort(array) {
  return array;
}

/// tests

import { test } from 'ava';

test(t => t.deepEqual(sort([]), []));
test(t =>
  t.deepEqual(sort([-4, 1, Infinity, 3, 3, 0]), [-4, 0, 1, 3, 3, Infinity]),
);
