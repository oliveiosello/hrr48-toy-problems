/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */


 // in linked list
 // out bool
 // const linear time, no mutation
 // edge ?

 // potential solutions

  // create var to store seen nodes (obj)
    // iterate over linked list
    // if key exists
      // return true
        // else, add key
  // return false

  // create a var to track number of nodes seen
    // iterate over linked list
      // return count (will this work if loop?)

    // compare count to tracked number?


var Node = function(value) {
  return { value: value, next: null };
};



var hasCycle = function(linkedList) {
  let seen = {};
  while ()

};

// updating file to create more readable email chain of results to address
