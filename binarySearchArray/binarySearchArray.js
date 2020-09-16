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
    let half = Math.floor(array.length / 2);
    let l = array.slice(0, half);
    let r = array.slice(half);

    let last = l[l.length - 1];
    let first = r[0];

    if (target <= last) {
        if (target === last) {
            return i;
        } else {
            binarySearch(l);
        }
    }
    
    if (target >= first) {
        if (target === first) {
            return i;
        } else {
            binarySearch(r);
        }
    }
};

