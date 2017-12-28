import { assert } from 'chai';
import HashTable from '/app/data-structures/hash-table';

describe('HashTable data structure', () => {
  let hashTable;
  const elements = [ [ 'a', 2 ], [ 'b', 7 ], [ 'c', 13 ] ];
  beforeEach(function() {
    hashTable = new HashTable();
    elements.forEach((element) => hashTable.put(element[0], element[1]));
  });

  it('Put and get values', () => {
    assert.ok(!!hashTable, 'hashTable exists');

    elements.forEach((element, index) =>
      assert.equal(
        hashTable.get(element[0]),
        element[1],
        `element value at #${index} match`
      )
    );
  });

  it('Does not overwrite elements with the same hash', () => {
    hashTable = new HashTable();
    // works for the 'loseloseHashCode' hash function, % 37
    const sameHashElements = [ [ 'ab', 2 ], [ 'y', 7 ] ];
    sameHashElements.forEach((element) =>
      hashTable.put(element[0], element[1])
    );

    sameHashElements.forEach((element, index) =>
      assert.equal(
        hashTable.get(element[0]),
        element[1],
        `element value at #${index} match`
      )
    );
  });

  it('Remove a certain value', () => {
    const keyToRemove = 'b';
    hashTable.remove(keyToRemove);
    assert.equal(hashTable.get(keyToRemove), undefined, 'element removed');
  });

  it('Get a undefined for an element that not exist', () => {
    assert.equal(hashTable.get('pepe'), undefined, 'element does not exists');
  });
});
