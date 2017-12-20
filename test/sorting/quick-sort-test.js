import {assert} from 'chai';
import quickSort from '/app/sorting/quick-sort';

describe('QuickSort sorting algorithm', () => {
  it('Sort an array using quick-sort', ()=> {
    assert.ok(!!quickSort, 'quickSort module exist');
    const toSort = [5, 2, 3, 10, 12, 7, 7, 7, 14, 9, -3, 6, 11, 0];
    const expected = [-3, 0, 2, 3, 5, 6, 7, 7, 7, 9, 10, 11, 12, 14];

    const sorted = quickSort(toSort);
    assert.deepEqual(expected, sorted, 'The array is sorted properly');
  });
});
