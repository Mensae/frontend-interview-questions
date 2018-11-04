/**
 * Like Object.assign, but merges objects deeply. For the sake of simplicity,
 * you can assume that objects can contain only numbers and other objects (and
 * not arrays, functions, etc.).
 *
 * @param {Object} target
 * @param {Object} sources
 * @returns {Object}
 */

/// solution

function assignDeep(target, ...sources) {
  return {};
}

/// tests

test('assignDeep #1', () => {
  expect(assignDeep({ a: 1 }, {})).toEqual({ a: 1 });
});

test('assignDeep #2', () => {
  expect(assignDeep({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
});

test('assignDeep #3', () => {
  expect(assignDeep({ a: 1 }, { a: { b: 2 } })).toEqual({ a: { b: 2 } });
});

/* eslint-disable */
test('assignDeep #4', () => {
  expect(
    assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 })
  ).toEqual({ a: { b: { c: 1, d: 2 } }, e: 3 });
});
/* eslint-enable */
