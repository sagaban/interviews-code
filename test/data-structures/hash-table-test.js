import { assert } from 'chai';
import HashTable from '/app/data-structures/hash-table';

describe('HashTable data structure', () => {
  let hashTable;
  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('exists', () => {
    assert.ok(!!hashTable, 'hashTable exists');
  });
});
