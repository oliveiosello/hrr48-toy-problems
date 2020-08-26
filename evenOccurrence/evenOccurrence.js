/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// in array
// out num
// return 1st if tie
// edge null if no even occ

// empty obj to hold item and occ
// iterate over arr
// add uniqe items to obj
//// increase value for non unique
// iterate over obj keys
//// find even occurance
///// return first

var evenOccurrence = function(arr) {
  var numCount = {};
  var evenOcc = [];

  for (var i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (numCount[num] === undefined) {
      numCount[num] = 1
    } else {
      numCount[num] += 1
    }
  }
  for (var key in numCount) {
    if (numCount[key] % 2 === 0) {
        return key;
    }
  }
};
