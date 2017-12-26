import { assert } from 'chai';
import BinarySearchTree from '/app/data-structures/binary-search-tree';

describe('BinarySearchTree data structure', () => {
  let binarySearchTree;
  const rootValue = 11;
  beforeEach(function() {
    /** Generates the folowin structure
 *
 *                 11
 *             /      \
 *           7          15
 *        /   \       /    \
 *      5     9      13     20
 *     /     / \    / \    / \
 *    3     8  10  12 14  18 25
 */
    binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(rootValue);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(5);
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    binarySearchTree.insert(10);
    binarySearchTree.insert(13);
    binarySearchTree.insert(12);
    binarySearchTree.insert(14);
    binarySearchTree.insert(20);
    binarySearchTree.insert(18);
    binarySearchTree.insert(25);
  });

  it('Adds elements to the tree', () => {
    assert.ok(!!binarySearchTree, 'binary search tree exists');
    assert.strictEqual(
      binarySearchTree.getRoot().key,
      rootValue,
      'root element values is ok'
    );
  });

  it('runs a in-order-transverse search', () => {
    const nodeValueToSeach = 10;
    const nonexistentValue = 6;
    let assertCounter = 0;
    let nodeCounter = 0;
    const callbak = (node) => {
      if (node === nodeValueToSeach) {
        assertCounter++;
      }
      if (node === nonexistentValue) {
        assertCounter++;
      }
      nodeCounter++;
    };
    binarySearchTree.inOrderTraverse(callbak);
    assert.strictEqual(assertCounter, 1, 'the seach was perforom ok');
    assert.strictEqual(nodeCounter, 14, 'the amount of node is ok ');
  });

  it('runs a in-order-transverse in the right order', () => {
    const actual = [];
    const expected = [ 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25 ];
    const callbak = (node) => {
      actual.push(node);
    };
    binarySearchTree.inOrderTraverse(callbak);
    assert.deepEqual(actual, expected, 'the seach was perforom in order');
  });
});
