/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

// in arr
// out arr
// considerations recurse, helper could be isSorted
// edge... optimization if already sorted
//         don't check last element on each pass?

// brute force solution:
  // var set to empty arr for sorted
  // iterate over array *indexing cheaper?
  // if first element is greater than second
  //   second pushed to sorted arr
  //     else, first
  // if arr.length is 1, push to sorted array
  // if sorted arr is not sorted
  //   recurse on sorted
  // return sorted?

let isSorted = false

var bubbleSort = function(array) {
  while (!isSorted) {
    sort(array)
  }
};

var sort = function(array) {
  let sorted = [];
  let frst = array[0];
  let scnd = array[1];
  if (array.length === 1) {
    sorted.push(frst)
  }
  if (frst > scnd) {
    sorted.push(scnd);
  } else {
    sorted.push(frst);
  }
  while (sorted.length === 0) {
    isSorted = true;

  }
}

// current problems:
// how to pass sorted in as array to be sorted
// how to return most recently sorted (input array) if sorted is true
