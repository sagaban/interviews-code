import { assert } from 'chai';
import {
  isUnique,
  isPermutation,
} from '/app/interview-questions/arrays-and-strings';

describe('Test all exercises about Arrays and Strings', () => {
  it('check that all the characters of an string are uniques', () => {
    const stringsToCheck = {
      santiago: false,
      cuatro: true,
      peperinopomoro: false,
      constantinopla: false,
      anticonstitucionalmente: false,
      centrifugadlos: true,
      esternocleidomastoideo: false,
      superman: true,
    };
    Object.keys(stringsToCheck).forEach((objectKey) => {
      assert.strictEqual(
        isUnique(objectKey),
        stringsToCheck[objectKey],
        `${objectKey} is checked ok as ${stringsToCheck[objectKey]}`
      );
    });
  });

  it('check if two string are permutations of each others', () => {
    const stringsToCheck = [
      [ 'argetino', 'ignorante', false ],
      [ 'perro', 'rope', false ],
      [ 'house', 'useho', true ],
      [ 'boat', 'toba', true ],
      [ 'dare', 'date', false ],
    ];
    stringsToCheck.forEach((entry) => {
      assert.strictEqual(
        isPermutation(entry[0], entry[1]),
        entry[2],
        `${entry[0]} is ${entry[2] ? '' : 'not '} a permutation of ${entry[1]}`
      );
    });
  });
});
