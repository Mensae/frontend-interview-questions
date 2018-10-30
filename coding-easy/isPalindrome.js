/**
 * Return true or false indicating whether the given string is a plaindrone
 * (case and space insensitive).
 * @param string
 * @returns {boolean}
 */

/// solution

function isPalindrome(string) {
  return false;
}

/// tests

import { test } from 'ava';

test(t => t.is(isPalindrome(''), true));
test(t => t.is(isPalindrome('abcdcba'), true));
test(t => t.is(isPalindrome('abcd'), false));
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true));
