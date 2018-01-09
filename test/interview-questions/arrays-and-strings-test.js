import { assert } from 'chai';
import {
  isUnique,
  isPermutation,
  uRLify,
  isPalindromePermutation,
  oneWayStringEdition,
  stringCompression,
  rotateMatrix,
  zeroMatrix,
  isStringRotation,
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

  it(`check a Palindrome-Permutation of certain string`, () => {
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

it('check if two string are permutations of each others', () => {
  [
    [ 'pale', 'ple', true ],
    [ 'pales', 'pale', true ],
    [ 'pale', 'pales', true ],
    [ 'prale', 'pale', true ],
    [ 'pale', 'bale', true ],
    [ 'pale', 'bake', false ],
    [ 'pale', 'paless', false ],
    [ 'pale', 'pale', false ],
    [ 4, 'dog', false ],
    [ 'cat', {}, false ],
  ].forEach((entry) => {
    assert.strictEqual(
      oneWayStringEdition(entry[0], entry[1]),
      entry[2],
      `${entry[0]} has ${entry[2] ? '' : 'not '}an edition of ${entry[1]}`
    );
    });
  });

it('compress a string of repeated characters', () => {
  [
    [ 'aabcccccaaa', 'a2b1c5a3' ],
    [ 'abcdef', 'abcdef' ],
    [ null, '' ],
    [ 2, '' ],
    [ 'yyyygggggggg', 'y4g8' ],
  ].forEach((entry) => {
    assert.strictEqual(
      stringCompression(entry[0]),
      entry[1],
      `"${entry[0]}" was compressed to "${entry[1]}"`
    );
    });
  });

it('rotates a matrix', () => {
  [
    [
      [ [ 1, 2 ], [ 3, 4 ] ],
      [ [ 1, 3 ], [ 2, 4 ] ],
    ], [
      [ [ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 12 ] ],
      [ [ 1, 5, 9 ],
        [ 2, 6, 10 ],
        [ 3, 7, 11 ],
        [ 4, 8, 12 ] ],
    ], [
      [ [ 1 ] ],
      [ [ 1 ] ],
    ], [
      null,
      [],
    ],
  ].forEach((entry) => {
    assert.deepEqual(
      rotateMatrix(entry[0]),
      entry[1],
      `"${entry[0]}" was rotated into "${entry[1]}"`
    );
    });
  });

it('set a matrix\'s rows and columns to 0', () => {
  [
    [
      [ [ 1, 0 ], [ 3, 4 ] ],
      [ [ 0, 0 ], [ 3, 0 ] ],
    ], [
      [ [ 1, 0, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 0 ] ],
      [ [ 0, 0, 0, 0 ],
        [ 5, 0, 7, 0 ],
        [ 0, 0, 0, 0 ] ],
    ], [
      [ [ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 0, 12 ] ],
      [ [ 1, 2, 0, 4 ],
        [ 5, 6, 0, 8 ],
        [ 0, 0, 0, 0 ] ],
    ], [
      [ [ 0, 2, 3, 0 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 12 ] ],
      [ [ 0, 0, 0, 0 ],
        [ 0, 6, 7, 0 ],
        [ 0, 10, 11, 0 ] ],
    ], [
      [ [ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 12 ] ],
      [ [ 1, 2, 3, 4 ],
        [ 5, 6, 7, 8 ],
        [ 9, 10, 11, 12 ] ],
    ], [
      [ [ 0 ] ],
      [ [ 0 ] ],
    ], [
      null,
      [],
    ],
  ].forEach((entry) => {
    assert.deepEqual(
      zeroMatrix(entry[0]),
      entry[1],
      `"${entry[0]}" was transformed into "${entry[1]}"`
    );
    });
  });

it('check if one string is substring of another', () => {
  [
    [ 'waterbottle', 'erbottlewat', true ],
    [ 4, 'dog', false ],
    [ 'cat', {}, false ],
    [ 'cat', 'gato', false ],
    [ 'house', 'sehou', true ],
    [ 'JavaScript', 'ScriptJava', true ],
  ].forEach((entry) => {
    assert.equal(
      isStringRotation(entry[0], entry[1]),
      entry[2],
      `${entry[0]} has ${entry[2] ? '' : 'not '}an edition of ${entry[1]}`
    );
    });
  });
});
