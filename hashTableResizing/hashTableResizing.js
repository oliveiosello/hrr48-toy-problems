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


var Node = function(key, value) {
  var node = {};

  var nodeKey = key;
  var nodeValue = value;
  var next = null;

  node.getKey = function() {
    return nodeKey;
  }

  node.insert = function(key, value) {
    if (nodeKey === key) {
      nodeValue = value;
    } else if (next) {
      next.insert(key,value);
    } else {
      next = Node(key, value);
    }
  }

  node.remove = function(key) {
    if (next && next.getKey() === key) {
      next = next.next;
    } else if (next) {
      next.remove(key);
    }
  }

  node.retrieve = function(key) {
    if (nodeKey=== key) {
      return nodeValue;
    } else if (next) {
      return next.retrieve(key);
    } 
  }
  return node;
}


var makeHashTable = function() {
  var result = {};
  var storage = [];

  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var linkedList = storage[index]

    if (linkedList) {
      linkedList.insert(key, value)
    } else {
      storage[index] = Node(key, value)
    }

    size += 1
     // if size exceeds 3/4 of storage limit, double storage limit
      // if size > storage limit * .75
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var linkedList = storage[index]

    if (linkedList) {
      return linkedList.retrieve(key)
    } 
  }

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var linkedList = storage[index]

    if (linkedList) {
      if (linkedList.getKey() === key) {
        storage[index] = linkedList.next
      } else {
        linkedList.remove(key)
      }
      size--
      // if size drops below 1/4 of storage limit, cut storage limit in half
      // if size < storage limit * .25
    } 
  };

  return result;
};
