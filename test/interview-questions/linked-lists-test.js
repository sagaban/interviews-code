import { assert } from 'chai';
import LinkedList from '/app/data-structures/linked-list';
import {
  removeDups,
} from '/app/interview-questions/linked-lists';

describe('Test all exercises about Linked Lists', () => {
  it('remove duplicated elements of a list', () => {
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
});
