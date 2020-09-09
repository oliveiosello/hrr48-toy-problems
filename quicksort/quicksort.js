/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

 // in array
 // out array
 // consider
 // edge

 // create min 
 // create max
 // create isSorted

 // iterate over array start at min until max - i... ?
 // last element is pivot
 // compare pivot to first element
 //   if fist is larger
 //     swap pivot and second to last element
 //       max--
 //     swap new last with first
 // if isSorted
 //   recurse on new array

var quicksort = function(array) {
    let min = array[0];
    let max = array.length - 2;
    let isSorted = false;
  
    for (var i = min; i < max; i++) {
      let pivot = array[array.length - 1];
      if (min > pivot) {
        array[array.length - 2] = pivot
        
      }
    }
  };

// updating file to create more readable email chain of results to address




