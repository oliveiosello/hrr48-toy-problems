/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

// in string of nums (length 4)
// out array of strings of letters (length 4)
// consider input can start with 0 and 1
// edge 0 and 1 do not have associated letters, rep as nums


// create helper function to extract letters //
// create letters arr
// iterate over input string
//   compare val at curr index to phoneDigit key
//     add value at matching key to letters arr
// return letters arr

// in main func //
// create words arr
// iterate over letters arr
//   once for each char in set of four
// push concatted char from each of the four

// var getLetters = function(digitString) {
//   var letters = [];
//   for (var i = 0; i < digitString.length; i++) {
//     let num = digitString[i];
//     if (phoneDigitsToLetters[num]) {
//       letters.push(phoneDigitsToLetters[num]);
//     }
//   }
//   return letters;
// };

// might a separate arr for each letter set

var telephoneWords = function(digitString) {
  let combos = [];
  let first = phoneDigits[digitString[0]].split("")
  for (char of first) {
    let second = phoneDigits[digitString[1]].split("")
    for (char2 of second) {
      let third = phoneDigits[digitString[2]].split("")
      for (char3 of third) {
        let fourth = phoneDigits[digitString[3]].split("")
        for (char4 of fourth) {
          combos.push(char + char2 + char3 + char4)
        }
      }
    }
  }
  return combos;
};
