import { assert } from 'chai';
import LinkedList from '/app/data-structures/linked-list';

describe('LinkedList data structure', () => {
  it('Append an element to a linked-list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.append('c');
    const expected = [ 'a', 'b', 'c' ];
    assert.ok(linkedList, 'linkedList exists');
    assert.deepEqual(linkedList.toArray(), expected, 'elemets were added');
  });

  it('Remove an element at a certain position', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.append('c');
    linkedList.removeAt(1);
    const expected = [ 'a', 'c' ];
    assert.deepEqual(linkedList.toArray(), expected, 'element was removed');
  });
});
