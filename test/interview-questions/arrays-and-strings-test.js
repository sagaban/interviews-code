import { assert } from 'chai';
import {
  isUnique,
  isPermutation,
  uRLify,
  isPalindromePermutation,
  oneWayStringEdition,
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
        `${entry[0]} is ${entry[2] ? '' : 'not '}a permutation of ${entry[1]}`
      );
    });
  });

  it(`URLIfy a given string trimming it and replacing the with spaces with
      "%20"`, () => {
    const stringsToTransform = [
      [ '   ', '' ],
      [ 'Mr John Smith    ', 'Mr%20John%20Smith' ],
      [ '%20', '%20' ],
      [ '   Mr Jones', 'Mr%20Jones' ],
      [ 'date', 'date' ],
    ];
    stringsToTransform.forEach((entry) => {
      assert.strictEqual(
        uRLify(entry[0]),
        entry[1],
        `${entry[0]} is well transformed into ${entry[1]}`
      );
    });
  });

  it(`Check a Palindrome-Permutation of certain string`, () => {
    [
      [ '   ', false ],
      [ 'Tact Coa', true ], // Taco Cat
      [ 'Anila tava natila', true ], // Anita lava la tina
      [ 'random text', false ],
      [ 'abcde edcba fgfg', true ],
      [ {}, false ],
      [ 5, false ],
    ].forEach((entry) => {
      assert.strictEqual(
        isPalindromePermutation(entry[0]),
        entry[1],
        `"${entry[0]}" is ${entry[1] ? '' : 'not '}a Palindrome-Permutation`
      );
    });
  });
});

it('check if two string are permutations of each others', () => {
  [
    [ 'pale', 'ple', true ],
    [ 'pales', 'pale', true ],
    [ 'pale', 'pales', true ],
    [ 'prale', 'pale', true ],
    [ 'pale', 'bale', true ],
    [ 'pale', 'bake', false ],
  ].forEach((entry) => {
    assert.strictEqual(
      oneWayStringEdition(entry[0], entry[1]),
      entry[2],
      `${entry[0]} has ${entry[2] ? '' : 'not '}an edition of ${entry[1]}`
    );
  });
});
