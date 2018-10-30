/**
 * Takes a string and returns true or false indicating whether its curly braces
 * are balanced.
 * @param string
 * @returns {boolean}
 */

/// solution

function isBalanced(string) {
  return false;
}

/// tests

import { test } from 'ava';

test(t => t.is(isBalanced('}{'), false));
test(t => t.is(isBalanced('{{}'), false));
test(t => t.is(isBalanced('{}{}'), true));
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true));
test(t => t.is(isBalanced('foo { bar { baz }'), false));
test(t => t.is(isBalanced('foo { bar } }'), false));
