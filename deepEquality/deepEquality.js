/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  // i 2 objs
  // o bool
  // c no lodash
  //   
  // e

  // create two vars
  //   one for each obj
  //   equal to destructured copy
  // compare each element
  //     if elements don't match
  //       return false
  // return true

var deepEquals = function(apple, orange) {
  let strOne = JSON.stringify(apple);
  let strTwo = JSON.stringify(orange);

  return strOne === strTwo;
};
