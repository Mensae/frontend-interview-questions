/**
 * Implement a BinarySearchTree class.
 * It should support 4 methods: add, has, remove, and size
 * @see {@link https://en.wikipedia.org/wiki/Binary_search_tree}
 */

class BinarySearchTree {}

/// tests

import { test } from 'ava';

test('BinarySearchTree', t => {
  let tree = new BinarySearchTree();
  tree.add(1, 2, 3, 4);
  tree.add(5);
  t.is(tree.has(2), true);
  t.is(tree.has(5), true);
  tree.remove(3);
  t.is(tree.size(), 4);
});

test('BinarySearchTree#get', t => {
  let tree = new BinarySearchTree();
  t.is(tree.get(42), null);
  tree.add(42, 43);
  t.is(tree.get(42), 42);
  t.is(tree.get(43), 43);
  t.is(tree.get(44), null);
});
