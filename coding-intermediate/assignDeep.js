/**
 * Like Object.assign, but merges objects deeply. For the sake of simplicity,
 * you can assume that objects can contain only numbers and other objects (and
 * not arrays, functions, etc.).
 * @param {Object} target
 * @param {Object} sources
 * @returns {Object}
 */

/// solution

function assignDeep(target, ...sources) {
  return {};
}

/// tests

import { test } from 'ava';

test(t => t.deepEqual(assignDeep({ a: 1 }, {}), { a: 1 }));
test(t => t.deepEqual(assignDeep({ a: 1 }, { a: 2 }), { a: 2 }));
test(t => t.deepEqual(assignDeep({ a: 1 }, { a: { b: 2 } }), { a: { b: 2 } }));
test(t =>
  t.deepEqual(
    assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }),
    { a: { b: { c: 1, d: 2 } }, e: 3 },
  ),
);
