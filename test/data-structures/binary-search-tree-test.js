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
    // This in an ineficient way of search a value. It's just for testing pourpuse
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

  it('runs a pre-order-transverse in the right order', () => {
    const actual = [];
    const expected = [ 11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25 ];
    const callbak = (node) => {
      actual.push(node);
    };
    binarySearchTree.preOrderTraverse(callbak);
    assert.deepEqual(actual, expected, 'the seach was perforom in order');
  });

  it('runs a post-order-transverse in the right order', () => {
    const actual = [];
    const expected = [ 3, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11 ];
    const callbak = (node) => {
      actual.push(node);
    };
    binarySearchTree.postOrderTraverse(callbak);
    assert.deepEqual(actual, expected, 'the seach was perforom in order');
  });

  it('get the min node', () => {
    const expected = 3;
    assert.strictEqual(
      binarySearchTree.min(),
      expected,
      'the min values is ok'
    );
  });

  it('get the max node', () => {
    const expected = 25;
    assert.strictEqual(
      binarySearchTree.max(),
      expected,
      'the max values is ok'
    );
  });

  it('searches a desired value', () => {
    const existentValue = 7;
    const nonexistentValue = 16;
    assert.ok(
      binarySearchTree.search(existentValue),
      'the existent Value seach was perforom ok'
    );
    assert.notOk(
      binarySearchTree.search(nonexistentValue),
      'the nonexistent Value seach was perforom ok'
    );
  });
});
