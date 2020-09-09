/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
  // create empty obj to store values
  // create counter set to 0 to track length
  // create var to house min value??
    this.container = {};
    this.count = 0;
    this.min = [];
    // this.min = 0;


  // add an item to the top of the stack
  // assign count/input value to empty obj
  // increment counter
    Stack.prototype.push = function(value) {
      this.container[this.count] = value;
      this.count++
    };

  // remove an item from the top of the stack
  // create index set to count
  // create deleted item set equal to storage at index - 1
  // decrement count
  // return deleted item
    Stack.prototype.pop = function() {
      this.index = this.count;
      this.deleted = this.storage[index - 1];
      this.count--;
      return deleted;
    };

  // return the number of items in the stack
  // return count
    Stack.prototype.size = function() {
      return this.count;
    };
  
  // return the minimum value in the stack
  // way to track smallest val while push/pop
  // return min
  // or //
  // access keys in obj
    // return minimum value of all keys
    Stack.prototype.min = function() {
      

    };

  };
