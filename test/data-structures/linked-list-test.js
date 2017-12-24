import { assert } from 'chai';
import LinkedList from '/app/data-structures/linked-list';

describe('LinkedList data structure', () => {
  let linkedList;
  beforeEach(function() {
    linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.append('c');
    linkedList.append('d');
  });

  it('Append an element to a linked-list', () => {
    const expected = [ 'a', 'b', 'c', 'd' ];
    assert.ok(linkedList, 'linkedList exists');
    assert.deepEqual(linkedList.toArray(), expected, 'elemets were added');
  });

  it('Remove an element at a certain position', () => {
    linkedList.removeAt(1);
    const expected = [ 'a', 'c', 'd' ];
    assert.deepEqual(linkedList.toArray(), expected, 'element was removed');
  });

  it('Insert an element at a certain position', () => {
    linkedList.insert(3, 'x');
    const expected = [ 'a', 'b', 'c', 'x', 'd' ];
    assert.deepEqual(linkedList.toArray(), expected, 'element was inserted');
  });

  it('Get the postion of a certain element', () => {
    const expected = 2;
    assert.deepEqual(
      linkedList.indexOf('c'), expected, 'return the correct postion');
  });

  it('Remove a certain element', () => {
    linkedList.remove('c');
    const expected = [ 'a', 'b', 'd' ];
    assert.deepEqual(linkedList.toArray(), expected, 'element was removed');
  });

  it('check if it\'s empty', () => {
    assert.ok(!linkedList.isEmpty(), 'it is not empty');
    assert.ok((new LinkedList()).isEmpty(), 'a new linked list is empty');
  });

  it('Get LinkedList size', () => {
    assert.equal(linkedList.size(), 4, 'size is correct');
  });

  it('Get LinkedList head element', () => {
    const head = linkedList.getHead();
    assert.equal(head.element, 'a', 'head element ok');
    assert.equal(head.next.element, 'b', 'head next element ok');
  });

  it('It get the string represantation of the linkedlist', () => {
    const expected = 'a, b, c, d';
    assert.equal( linkedList.toString(), expected, 'element was removed');
  });
});
