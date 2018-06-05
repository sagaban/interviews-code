import { assert } from 'chai';
import LinkedList from '/app/data-structures/linked-list';
import {
  removeDups,
  extendListToDeleteMiddleNode,
  sumList,
  sumListForward,
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
        [ 'a', 'b', 'c', 'e', 'f' ],
      ],
      [
        [ 'a', 'b', 'c' ],
        [ 'a', 'c' ],
      ],
    ].forEach((entry) => {
      const list = new LinkedList(entry[0]);
      const mn = list.getNodeAt(parseInt(list.size()/2));
      extendListToDeleteMiddleNode(list);
      list.deleteMiddleNode(mn);
      assert.deepEqual(
        list.toArray(),
        entry[1],
        `${entry[0]} after deleted middle node is ${entry[1]}`
      );
    });
  });

  it('Sum two LinkedList and returns another one, reverse order', () => {
    [
      [
        [ 7, 1, 6 ],
        [ 5, 9, 2 ],
        [ 2, 1, 9 ],
      ],
      [
        [ 1, 0, 6 ],
        [ 4, 3, 9 ],
        [ 5, 3, 5, 1 ],
      ],
      [
        [ 1, 4, 6 ],
        [ 3, 9 ],
        [ 4, 3, 7 ],
      ],

    ].forEach((entry) => {
      const listA = new LinkedList(entry[0]);
      const listB = new LinkedList(entry[1]);
      const result = sumList(listA, listB);
      assert.deepEqual(
        result.toArray(),
        entry[2],
        `${entry[0]} plus ${entry[1]} is ${entry[2]}`
      );
    });
  });

  it('Sum two LinkedList and returns another one, forward order', () => {
    [
      [
        [ 7, 1, 6 ],
        [ 5, 9, 2 ],
        [ 1, 3, 0, 8 ],
      ],
      [
        [ 1, 0, 6 ],
        [ 4, 3, 9 ],
        [ 5, 4, 5 ],
      ],
      [
        [ 1, 4, 6 ],
        [ 0, 3, 9 ],
        [ 1, 8, 5 ],
      ],

    ].forEach((entry) => {
      const listA = new LinkedList(entry[0]);
      const listB = new LinkedList(entry[1]);
      const result = sumListForward(listA, listB);
      assert.deepEqual(
        result.toArray(),
        entry[2],
        `${entry[0]} plus ${entry[1]} is ${entry[2]}`
      );
    });
  });
});
