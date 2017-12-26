import { assert } from 'chai';
import BinarySearchTree from '/app/data-structures/binary-search-tree';

describe('BinarySearchTree data structure', () => {
  it('Append an element to a linked-list', () => {
    const binarySearchTree = new BinarySearchTree();
    const valueToInser = 11;
    binarySearchTree.insert(valueToInser);
    assert.ok(!!binarySearchTree, 'binary search tree exists');
    assert.strictEqual(
      binarySearchTree.getRoot().key,
      valueToInser,
      'it is the root element'
    );
  });
});
