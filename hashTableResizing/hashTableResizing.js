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

  node.forEach = function(iterator) {
    iterator(nodeKey, nodeValue)
    if (node !== null) {
      node.forEach(iterator);
    }
  }
}

var makeHashTable = function() {
  var result = {};
  var storage = [];

  var storageLimit = 4;
  var size = 0;

  function redistribute() {
    var accum = []

    for (let i = 0; i < storage.length; i++) {
      var linkedList = storage[i]
      if (linkedList){
        linkedList.forEach(function(key, value) {
          accum.push([key, value])
        })
      }
    }
    storage = []
    for (let i = 0; i < accum.length; i++) {
      var keyValue = accum[i]
      result.insert(keyValue[0], keyValue[1])
    }
  }
  
  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var linkedList = storage[index]

    if (linkedList) {
      linkedList.insert(key, value)
    } else {
      storage[index] = Node(key, value)
    }
    size += 1
    if (size > storageLimit * .75) {
      storageLimit = storageLimit * 2
      redistribute()
    }
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
      if (size < storageLimit * .25) {
        storageLimit = storageLimit / 2
        redistribute();
      }
    } 
  };

  return result;
};
