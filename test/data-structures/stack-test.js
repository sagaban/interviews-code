import { assert } from 'chai';
import Stack from '/app/data-structures/stack';

describe('Stack data structure', () => {
  let stack;
  beforeEach(function() {
    stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
  });

  it('Push an element to the stack', () => {
    const expected = [ 'a', 'b', 'c', 'd' ];
    assert.ok(stack, 'stack exists');
    assert.deepEqual(stack.toArray(), expected, 'elements were added');
  });

  it('Pop an element of the stack', () => {
    const popped = stack.pop();
    assert.strictEqual(popped, 'd', 'element popped ok');
    assert.deepEqual(stack.toArray(), [ 'a', 'b', 'c' ], 'remaining stack ok');
  });

  it('Peek an element of the stack', () => {
    const peeked = stack.peek();
    assert.strictEqual(peeked, 'd', 'element peeked ok');
    assert.deepEqual(
      stack.toArray(),
      [ 'a', 'b', 'c', 'd' ],
      'stack was not modified'
    );
  });

  it('check if it\'s empty', () => {
    assert.ok(!stack.isEmpty(), 'it is not empty');
    assert.ok(new Stack().isEmpty(), 'a new stack is empty');
  });

  it('Get Stack size', () => {
    assert.equal(stack.size(), 4, 'size is correct');
  });

  it('Clear stack', () => {
    stack.clear();
    assert.ok(stack.isEmpty(), 'it was cleared and is empty');
  });
});
