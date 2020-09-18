/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

// i sorted arr, target
// o index
// c breakout condition for if doesn't exist
//   if array is split, how to maintain integrity of indecies 
//   ensure recurse on smaller and smaller part
// e should return null if doesn't exist (check to see default)

// split arr in half
// check if target is less or equal to last element of first half
//   if yes is it last element?
//     if yes, return i
//       if no, recurse
// else if target is greater or equal to first element of second half
//   if yes is it first element?
//     if yes, return i
//       if no, recurse

var binarySearch = function (array, target) {
    let first = 0;
    let last = array.length - 1;
    let half = Math.floor(array.length / 2);

    while(first < last && array[half] !== target) {
      if (target > array[half]) {
        first = half + 1;
      } else if (target < array[half]) {
        last = half - 1;
      }
      half = Math.floor((first + last) / 2);
      }
    if (array[half] !== target) {
      return null
    } else {
      return half;
    }
};

