import { assert } from 'chai';
import LinkedList from '/app/data-structures/linked-list';
import {
  removeDups,
  deleteMiddleNode,
} from '/app/interview-questions/linked-lists';

describe('Test all exercises about Linked Lists', () => {
  it('removes duplicated elements of a list', () => {
    [
      [
        [ 1, 2, 3, 3, 2, 4, 5, 4, 6 ],
        [ 1, 2, 3, 4, 5, 6 ],
      ],
      [
        [ ],
        [ ],
      ],
      [
        [ 1, 1, 1, 1, 1, 1, 1 ],
        [ 1 ],
      ],
      [
        null,
        [ ],
      ],
    ].forEach((entry) => {
      const linkedList = new LinkedList(entry[0]);
      assert.deepEqual(
        removeDups(linkedList).toArray(),
        entry[1],
        `${entry[0]} converted to ${entry[1]} successfully`
      );
    });
  });

  it('removes middle elements of a Linked List', () => {
    [
      [
        [ 'a', 'b', 'c', 'd', 'e', 'f' ],
        [ 'a', 'b', 'd', 'e', 'f' ],
      ],
      [
        [ 'a', 'b', 'c' ],
        [ 'a', 'c' ],
      ],
    ].forEach((entry) => {
      const list = new LinkedList(entry[0]);
      deleteMiddleNode(list);
      assert.deepEqual(
        list.toArray(),
        entry[1],
        `${entry[0]} after deleted middle node is ${entry[1]}`
      );
    });

    [
      null,
      new LinkedList([ 'a', 'b' ]),
      new LinkedList([ 'a' ]),
      2,
      [ 'a' ],
    ].forEach((list) => {
      assert.throws(() => deleteMiddleNode(list));
    });
  });
});
