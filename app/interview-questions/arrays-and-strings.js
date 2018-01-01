/**
 * 1.1
 * Is Unique: Implement an algorithm to determine if a string has all unique
 * characters. What if you cannot use additional data structures?
 *
 * @param {string} inputString - The string to check.
 * @return {boolean}
 */
export const isUnique = (inputString) => {
  const stringArray = inputString.split('');
  for (let i = 0; i < stringArray.length - 1; i++) {
    const char = stringArray[i];
    for (let j = i + 1; j < stringArray.length; j++) {
      const toCompareChar = stringArray[j];
      if (char === toCompareChar) {
        return false;
      }
    }
  }
  return true;
};

// ALTERNATIVE SOLUTIONS
// ---------------------

/**
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersSet(str) { // eslint-disable-line no-unused-vars
  let chars = new Set();

  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to each other so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersSort(str) { // eslint-disable-line no-unused-vars
  // sort string using quicksort
  str.sort();

  for (let i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * 1.2
 * Check Permutation: Given two strings, write a method to decide if one is a
 * permutation of the other.
 *
 * @param {string} strA - First string to compare.
 * @param {string} strB - Second string to compare.
 * @return {boolean}
 */
export const isPermutation = (strA, strB) => {
  if (strA.length !== strB.length) {
    return false;
  }
  const sortedA = strA.split('').sort();
  const sortedB = strB.split('').sort();
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }
  return true;
};


// ALTERNATIVE SOLUTIONS
// ---------------------
/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string} str1 First string, passed in as a character array
 * @param  {string} str2 Second string, passed in as a character array
 * @return {boolean}     True if first and second strings are permutations
 *                       otherwise false
 */
function isPermutationSorted(str1, str2) { // eslint-disable-line no-unused-vars
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }
  // sort string using quicksort
  str1.sort();
  str2.sort();

  return str1.every((v, i) => v === str2[i]);
}
