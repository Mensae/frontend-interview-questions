const assignDeep = require('../assignDeep');

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
