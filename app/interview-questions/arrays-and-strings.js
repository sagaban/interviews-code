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
// eslint-disable-next-line no-unused-vars
function hasUniqueCharactersSet(str) {
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
 * @param  {string}   str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
// eslint-disable-next-line no-unused-vars
function hasUniqueCharactersSort(str) {
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

// ALTERNATIVE SOLUTION
// --------------------
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
// eslint-disable-next-line no-unused-vars
function isPermutationSorted(str1, str2) {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }
  // sort string using quicksort
  str1.sort();
  str2.sort();

  return str1.every((v, i) => v === str2[i]);
}

/**
 * 1.3
 * URLify: Write a method to replace all spaces in a string with '%20'. You may
 * assume that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true" length of the string.
 * (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.)
 * EXAMPLE
 * Input: "Mr John Smith ", 13
 * Output: "Mr%20J ohn%20Smith"
 *
 * @param {string} str - The string to URLify.
 * @return {string}
 */
export const uRLify = (str) => str.trim().replace(/\ /g, '%20');

// ALTERNATIVE SOLUTION
// --------------------
// Note that is solution is the one in the book, not very intuitive for
// JavaScript language
/**
 * Count the number of spaces in the string to calculate the new length of the
 * string and move characters back where required replacing spaces with %20.
 *
 * N = |url|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} url URL string as a character arra which will be
 *                        updated in place
 * @return {string[]}     Updated URL character array
 */
// eslint-disable-next-line no-unused-vars
function encodeSpaces(url) {
  if (!url || url.length === 0) {
    return url;
  }

  let spaceCount = 0;
  for (let i = 0; i < url.length; ++i) {
    if (url[i] === ' ') {
      ++spaceCount;
    }
  }

  // add an extra 2 characters for each space
  let newLength = url.length - 1 + 2 * spaceCount;
  for (let i = url.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
    if (url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    } else {
      url[j] = url[i];
    }
  }

  return url;
}

/**
 * 1.4
 * Palindrome Permutation: Given a string, write a function to check if it is a
 * permutation of a palindrome. A palindrome is a word or phrase that is the
 * same forwards and backwards. A permutation is a rearrangement of letters.The
 * palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat". "atco cta". etc.)
 *
 * @param  {string}   str   String to check
 * @return {boolean}
 */
export const isPalindromePermutation = (str) => {
  if (!str || typeof str !== 'string' || !str.trim()) {
    return false;
  }
  let oddFound = false;
  const sortedArray = str.replace(/\ /g, '').toLowerCase().split('').sort();
  for (let i = 0; i < sortedArray.length; i += 2) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      if (oddFound) {
        return false;
      } else {
        i--;
        oddFound = true;
      }
    }
  }
  return true;
};

// BOOK SOLUTION
export const palinPerm = function(string) {
  // create object literal to store charcount
  let chars = {};
  let currChar;
  let mulligan = false;
  let isPerm = true;
  // pump characters in, spaces not counted, all lowercase
  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });
  // check that all chars are even count, except for one exception
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
      // if more than one exception, return false
      if (mulligan) {
        isPerm = false; // return in a forEach statement doesn't flow out of
        // function scope
      } else {
        mulligan = true;
      }
    }
  });
  // if not return true
  return isPerm;
};

/**
 * 1.5
 * One Away: There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit (or zero
 * edits) away.
 * EXAMPLE
 * pale, ple -> true
 * pales. pale -> true
 * pale. bale -> true
 * pale. bake -> false
 *
 * @param  {string} str1 First string
 * @param  {string} str2 Second string
 * @return {boolean}
 */
export const oneWayStringEdition = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1 === str2) {
    return false;
  }
  const charArray1 = str1.trim().split('');
  const charArray2 = str2.trim().split('');

  const diff = charArray1.length - charArray2.length;
  if (Math.abs(diff) > 1) return false;
  let mayorLength = Math.max(charArray1.length, charArray2.length);

  let edited = false;
  for (let i = 0, j = 0; i < mayorLength; i++, j++) {
    if (charArray1[i] !== charArray2[j]) {
      if (edited) return false; // Only one edition
      edited = true;
      if (diff > 0) j--;
      if (diff < 0) i--;
    }
  }
  return edited;
};

// BOOK SOLUTION
export const oneAway = function(string1, string2) {
  // insert a char for str1 -> remove a char for str2
  let checkOneMissing = function(first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      let mulligan = false;
      let fP = 0; // first Pointer
      let sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++; // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };

  let checkOneDiff = function(first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      let mulligan = false;
      let fP = 0; // first Pointer
      let sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false; // more than one mismatch
          } else {
            mulligan = true; // use up mulligan
          }
        }
        fP++;
        sP++;
      }
      return true;
    }
  };

  return (
    checkOneMissing(string1, string2) ||
    checkOneMissing(string2, string1) ||
    checkOneDiff(string1, string2)
  );
};
