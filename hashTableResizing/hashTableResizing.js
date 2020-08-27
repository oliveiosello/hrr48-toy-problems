/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  
  
  result.insert = function(key, value) {
    // create var equal to result of getIndex on key/limit
    // iterate over storage array at index
    // create var to store tuple 
    // if tuple key is undefined
      // assign tuple to storage
    // if tuple at 0 is equal to key
      // set current tuple equal to value
      // size++
    // if size reaches 3/4 of storage limit, double storange limit
      // if size > storage limit * .75
  };

  result.retrieve = function(key) {
    // create index var equal to result of getIndex on key/limit
    // create var set to tuple of storage at index
    // iterate over tuple
      // if current tuple's key is equal to key
        // return the current tuple's value

  result.remove = function(key) {
    // create index var equal to result of getIndex on key/limit
    // create var set to tupe of storage at index
    // iterate over tuple
      // if current tuple's key is equal to key
        // remove tuple from storage
        // size --
    // if size drops below 1/4 of storage limit, cut storage limit in half
      // if size < storage limit * .25
  };

  return result;
};
