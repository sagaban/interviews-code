import {assert} from 'chai';
import LinkedList from '/app/data-structures/linked-list';

describe('LinkedList data structure', () => {
  it('Append an element to a linked-list', ()=> {
    const linkedList = new LinkedList();
    linkedList.append(1);
    assert.ok(linkedList, 'linkedList exists');
  });
});
