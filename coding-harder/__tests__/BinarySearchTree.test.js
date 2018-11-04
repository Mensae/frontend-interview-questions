const BinarySearchTree = require('../BinarySearchTree');

describe('BinarySearchTree', () => {
  let tree = new BinarySearchTree();

  beforeAll(() => {
    tree = new BinarySearchTree();
  });

  afterAll(() => {
    tree = undefined;
  });

  it('should have an "add" method', () => {
    const spy = jest.spyOn(tree, 'add');
    tree.add(1, 2, 3, 4);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should have an "has" method', () => {
    tree.add(1, 2, 3, 4);
    tree.add(5);
    expect(tree.has(2)).toBe(true);
    expect(tree.has(5)).toBe(true);
  });

  it('should have a "remove" method', () => {
    tree.add(1, 2, 3, 4);
    tree.remove(3);
    expect(tree.has(3)).toBe(false);
  });

  it('should have a "size" method', () => {
    tree.add(1, 2, 3, 4);
    tree.add(5);
    tree.remove(3);
    expect(tree.size()).toBe(4);
  });

  it('should have a "get" method', () => {
    tree = new BinarySearchTree();
    const spy = jest.spyOn(tree, 'get');
    expect(tree.get(42)).toBe(null);
    expect(spy).toHaveBeenCalled();
    tree.add(42, 43);
    expect(tree.get(42)).toBe(42);
    expect(tree.get(43)).toBe(43);
    expect(tree.get(44)).toBe(null);
    spy.mockRestore();
  });
});
