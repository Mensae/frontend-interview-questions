/**
 * Find the intersection of two arrays. Can you do it in O(M+N) time (where M
 * and N are the lengths of the two arrays)?
 * @param {Object[]} left
 * @param {Object[]} right
 * @returns {Object[]}
 */

/// solution

function intersection(left, right) {
  return [];
}

/// tests

import { test } from 'ava';

test(t => t.deepEqual(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]), [4, 1]));
test(t => t.deepEqual(intersection([1, 5, 4, 2], [7, 12]), []));
