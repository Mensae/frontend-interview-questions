/**
 * Implement a BinaryTree class with breadth first search and inorder, preorder,
 * and postorder depth first search functions.
 * @see {@link https://en.wikipedia.org/wiki/Binary_tree}
 */

class BinarySearchTree {}

import { test } from 'ava';

test('BinarySearchTree#put', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 },
  );
  t.is(bst.get('c'), 42);
  bst.put('c', 44);
  t.is(bst.get('c'), 44);
});

test('BinarySearchTree#get', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 },
  );
  t.is(bst.get('a'), 100);
  t.is(bst.get('c'), 42);
  t.is(bst.get('d'), 22);
});

test('BinarySearchTree#delete', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 },
  );
  t.is(bst.get('a'), 100);
  t.is(bst.get('c'), 42);
  t.is(bst.get('d'), 22);

  bst.delete('a');
  bst.delete('d');
  t.is(bst.get('d'), null);
  t.is(bst.get('a'), null);
  t.is(bst.get('c'), 42);
});

test('BinarySearchTree#size', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 },
  );
  t.is(bst.size(), 3);
  bst.delete('d');
  bst.delete('a');
  t.is(bst.size(), 1);
});

test('BinarySearchTree#inorder', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 },
    { key: 'e', value: 42 },
    { key: 'b', value: 100 },
  );

  let values = [];
  bst.inorder(n => {
    values.push(n.key);
  });
  t.deepEqual(values, ['a', 'b', 'c', 'd', 'e']);
});

test('BinarySearchTree#preorder', t => {
  let bst = new BinarySearchTree(
    { key: 'c', value: 42 },
    { key: 'a', value: 100 },
    { key: 'd', value: 22 },
    { key: 'e', value: 42 },
    { key: 'b', value: 100 },
  );

  let values = [];
  bst.preorder(n => {
    values.push(n.key);
  });
  t.deepEqual(values, ['c', 'a', 'b', 'd', 'e']);
});

test('BinarySearchTree#postorder', t => {
  let bst = new BinarySearchTree(
    { key: 'f', value: 42 },
    { key: 'b', value: 100 },
    { key: 'g', value: 22 },
    { key: 'a', value: 42 },
    { key: 'd', value: 100 },
    { key: 'i', value: 100 },
    { key: 'c', value: 100 },
    { key: 'e', value: 100 },
    { key: 'h', value: 100 },
  );

  let values = [];
  bst.postorder(n => {
    values.push(n.key);
  });
  t.deepEqual(values, ['a', 'c', 'e', 'd', 'b', 'h', 'i', 'g', 'f']);
});

test('BinarySearchTree#bfs', t => {
  let bst = new BinarySearchTree(
    { key: 'f', value: 42 },
    { key: 'b', value: 100 },
    { key: 'g', value: 22 },
    { key: 'a', value: 42 },
    { key: 'd', value: 100 },
    { key: 'i', value: 100 },
    { key: 'c', value: 100 },
    { key: 'e', value: 100 },
    { key: 'h', value: 100 },
  );

  let values = [];
  bst.bfs(n => {
    values.push(n.key);
  });
  t.deepEqual(values, ['f', 'b', 'g', 'a', 'd', 'i', 'c', 'e', 'h']);
});
