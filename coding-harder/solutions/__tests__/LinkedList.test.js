const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
  const list = new LinkedList(1, 2, 3);

  it('should have an "add" method', () => {
    const spy = jest.spyOn(list, 'add');
    list.add(4);
    list.add(5);
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });

  it('should have an "has" method', () => {
    expect(list.has(1)).toBe(true);
    expect(list.has(4)).toBe(true);
    expect(list.has(6)).toBe(false);
  });
});
