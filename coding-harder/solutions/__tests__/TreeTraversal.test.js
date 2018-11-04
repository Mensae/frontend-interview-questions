const BinarySearchTree = require('../TreeTraversal');

describe('BinarySearchTree', () => {
  describe('get', () => {
    const bst = new BinarySearchTree(
      { key: 'c', value: 42 },
      { key: 'a', value: 100 },
      { key: 'd', value: 22 },
    );
    test('test #1', () => {
      expect(bst.get('a')).toBe(100);
      expect(bst.get('c')).toBe(42);
      expect(bst.get('d')).toBe(22);
    });
  });

  describe('put', () => {
    const bst = new BinarySearchTree(
      { key: 'c', value: 42 },
      { key: 'a', value: 100 },
      { key: 'd', value: 22 },
    );
    test('test #1', () => {
      expect(bst.get('c')).toBe(42);
      bst.put('c', 44);
      expect(bst.get('c')).toBe(44);
    });
  });

  describe('delete', () => {
    const bst = new BinarySearchTree(
      { key: 'c', value: 42 },
      { key: 'a', value: 100 },
      { key: 'd', value: 22 },
    );
    test('test #1', () => {
      bst.delete('a');
      bst.delete('d');
      expect(bst.get('a')).toBe(null);
      expect(bst.get('d')).toBe(null);
      expect(bst.get('c')).toBe(42);
    });
  });

  describe('size', () => {
    const bst = new BinarySearchTree(
      { key: 'c', value: 42 },
      { key: 'a', value: 100 },
      { key: 'd', value: 22 },
    );
    test('test #1', () => {
      expect(bst.size()).toBe(3);
      bst.delete('d');
      bst.delete('a');
      expect(bst.size()).toBe(1);
    });
  });

  describe('inorder', () => {
    const bst = new BinarySearchTree(
      { key: 'c', value: 42 },
      { key: 'a', value: 100 },
      { key: 'd', value: 22 },
      { key: 'e', value: 42 },
      { key: 'b', value: 100 },
    );
    test('test #1', () => {
      const values = [];
      bst.inorder(n => values.push(n.key));
      expect(values).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
  });

  describe('preorder', () => {
    const bst = new BinarySearchTree(
      { key: 'c', value: 42 },
      { key: 'a', value: 100 },
      { key: 'd', value: 22 },
      { key: 'e', value: 42 },
      { key: 'b', value: 100 },
    );
    const values = [];

    test('test #1', () => {
      bst.preorder(n => values.push(n.key));
      expect(values).toEqual(['c', 'a', 'b', 'd', 'e']);
    });
  });

  describe('postorder', () => {
    const bst = new BinarySearchTree(
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
    const values = [];

    test('test #1', () => {
      bst.postorder(n => values.push(n.key));
      expect(values).toEqual(['a', 'c', 'e', 'd', 'b', 'h', 'i', 'g', 'f']);
    });
  });

  describe('bfs', () => {
    const bst = new BinarySearchTree(
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
    const values = [];

    test('test #1', () => {
      bst.bfs(n => values.push(n.key));
      expect(values).toEqual(['f', 'b', 'g', 'a', 'd', 'i', 'c', 'e', 'h']);
    });
  });
});
