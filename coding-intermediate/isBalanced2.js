/**
 * Like the isBalanced function you implemented before, but supports 3 types of
 * braces: curly {}, square [], and round ().
 * A string with interleaving braces should return false.
 * @param string
 * @returns {boolean}
 */

/// solution

function isBalanced2(string) {
  return false;
}

/// tests

import { test } from 'ava';

test(t => t.is(isBalanced2('(foo { bar (baz) [boo] })'), true));
test(t => t.is(isBalanced2('foo { bar { baz }'), false));
test(t => t.is(isBalanced2('foo { (bar [baz] } )'), false));
