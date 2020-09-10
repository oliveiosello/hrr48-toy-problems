/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  // in str
  // out arr
  // consider repeated strings okay
  //          length of str unknown, number of loops unknown
  //          ideas: recursive??, helper func
  // edge

  // create result arr
  // iterate over string
  // create pointer var
  // iterate over string second time
  //   compare pointer to all other chars
  //     if not equal push to result
  // return result

  function numOfLoops(string) {
    let num = string.length
    for (var i = 0; i < num; i++) {
      for (var j = 0; j < string.length; j++) {
        
      }
    }
  }

  // create helper func to determine num of times to loop
  // set var to length
  //   for num of chars in str
  //     loop over each char

  // consider: what to return in helper vs main func
  //          


var allAnagrams = function(string) {
  let result = [];
  for (var i = 0; i < string.length; i++) {
    let pointer = string[i];
    for (var j = 0; j < string.length; j++) {
      let letter = string[j]
      // if (i !== j) {
        result.push(pointer + letter);
      // }
      // only yeilds combos for two 
    }
  }
  return result;
};
};
