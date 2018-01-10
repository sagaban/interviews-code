// Chapter 1

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

/**
 * 1.6
 * String Compression: Implement a method to perform basic string compression
 * using the counts of repeated characters. For example, the string aabcccccaaa
 * would become a2b1c5a3. If the "compressed" string would not become smaller
 * than the original string, your method should return the original string. You
 * can assume the string has only uppercase and lowercase letters (a - z)
 *
 *
 * @param  {string}   str   String to compress
 * @return {string}
 */
export const stringCompression = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  let compressed = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) {
      compressed = `${compressed}${str[i]}${counter}`;
      counter = 1;
      if (compressed.length > str.length) {
        return str;
      }
    } else {
      counter++;
    }
  }
  return compressed;
};

// BOOK SOLUTION
/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {
  if (!str) {
    return str;
  }

  let cStr = '';
  for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    let start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }
    // JS does not have a StringBuilder/StringBuffer style class for creating
    // strings string concatenation has been heavily optimised in JS
    // implementations and is faster than creating a string via an array then
    // using a .join('') at the end
    cStr += (i - start + 1) + char;
  }

  return cStr.length < str.length ? cStr : str;
}

/**
 * 1.7
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel
 * in the image is 4 bytes, write a method to rotate the image by 90 degrees.
 * Can you do this in place?
 *
 * @param  {array}    matrix  Matrix to rotate
 * @return {array}            Rotated matrix
 */
export const rotateMatrix = (matrix) => {
  if (!matrix || matrix.length < 0) {
    return [];
  }
  const matrixToReturn = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ( i === 0) {
        matrixToReturn[j] = [];
      }
      matrixToReturn[j][i] = matrix[i][j];
    }
  }
  return matrixToReturn;
};


// BOOK SOLUTION
/**
 * Go through the matrix diagonally from 0,0 until half way through (one less
 * where odd N). For each diagonal starting point move through matrix along row
 * until length - starting index. For each index in the matrix go through all 4
 * sides moving items along one place.
 *
 * N = dimension of matrix
 * Time: O(N^2)
 * Additional space: O(1)
 *
 * @param  {array} matrix NxN matrix to rotate in place
 * @return {array}        Rotated matrix, same object as input
 */
export function rotateMatrixBook(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }
  if (matrix.length < 2) {
    return matrix; // no need to do anything to rotate a 1,1 matrix
  }

  let len = matrix.length - 1;
  let half = Math.floor(matrix.length / 2);
  // loop through diagonal
  for (let start = 0; start < half; ++start) {
    // loop through x axis
    for (let i = 0; i < len - (start * 2); ++i) {
      let y = start;
      let x = start + i;
      let prev = matrix[y][x];

      // loop through all 4 corners
      for (let j = 0; j < 4; ++j) {
        let nextY = x;
        let nextX = len - y;
        let next = matrix[nextY][nextX];
        matrix[nextY][nextX] = prev;
        prev = next;
        x = nextX;
        y = nextY;
      }
    }
  }

  return matrix;
}

/**
 * 1.8
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is
 * 0, its entire row and column are set to O.
 *
 * @param  {array}    matrix  Matrix to set 0
 * @return {array}
 */
export const zeroMatrix = (matrix) => {
  if (!matrix || matrix.length < 0) {
    return [];
  }
  // I go through the original matrix to find the 0 values
  const rowsToZero = [];
  const columnsToZero = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ( matrix[i][j] === 0) {
        rowsToZero.push(i);
        columnsToZero.push(j);
      }
      matrix[i][j];
    }
  }
  // Create the matrix to return
  const matrixToReturn = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixToReturn[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
     if (rowsToZero.includes(i) || columnsToZero.includes(j)) {
       matrixToReturn[i][j] = 0;
     } else {
      matrixToReturn[i][j] = matrix[i][j];
     }
    }
  }

  return matrixToReturn;
};


// BOOK SOLUTION
/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the
 * second pass zero out any cells that need to be zeroed out based on the row or
 * column indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrixBook(matrix) {
  if (!matrix) {
    throw new Error('invalid matrix');
  }
  if (matrix.length === 0) {
    return matrix;
  }

  let rows = new Array(matrix.length);
  let cols = new Array(matrix[0].length);

  rows.fill(false);
  cols.fill(false);

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (matrix[y][x] === 0) {
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  for (let y = 0; y < rows.length; ++y) {
    for (let x = 0; x < cols.length; ++x) {
      if (rows[y] || cols[x]) {
        matrix[y][x] = 0;
      }
    }
  }

  return matrix;
}

/**
 * 1.9
 * String Rotation: Assume you have a method isSubstring which checks if one
 * word is a substring of another. Given two strings, 51 and 52, write code to
 * check if 52 is a rotation of 51 using only one call to isSubstring (e.g.,
 * "waterbottle" is a rotation of "erbottlewat").
 *
 * @param  {string}   str1  First string
 * @param  {string}   str2  Second string
 * @return {boolean}
 */
export const isStringRotation = (str1, str2) => {
  if (!str1 || typeof str1 !== 'string' || !str2 || typeof str2 !== 'string' ||
      str1.length !== str2.length ) {
    // TODO: Should I return boolean or rise an Error?
    return false;
  }
  // isSubstring --> includes
  return (str1+str1).includes(str2);
};

// BOOK SOLUTION

/**
 * Duplicate the rotated string, if the substring being searched is a different
 * rotation of the string then it will be a substring of the new string. Both
 * strings must be the same length.
 *
 * N = |str1|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string}  str1   First string
 * @param  {string}  str2   String to check if it is a rotated version of str1
 * @return {boolean}        True if str1 and str2 are rotated versions of
 *                          each other, otherwise false
 */
export function isRotatedSubstring(str1, str2) {
  if (!str1 || !str2) {
    throw new Error('invalid input');
  }
  if (str1.length !== str2.length) {
    return false;
  }
  return isSubstring(str1 + str1, str2);
}

// Implementation of isSubstring function which is defined in question
// can only be called once
function isSubstring(str, substr) {
  return str.includes(substr);
}
