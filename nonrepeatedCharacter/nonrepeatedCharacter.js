/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 // in string
 // out char

 // create obj to house char count
 // for each char in string
 //   if char exists in obj
 //     increment value
 //   else add char and 1 as key/val to obj
 // if obj.char is 1, return char

var firstNonRepeatedCharacter = function(string) {
  var result = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (result[char]) {
      result[char]++
    } else {
      result[char] = 1;
    }
  }
  for (var key in result) {
    if (result[key] === 1) {
      return key;
    }
  }
};
