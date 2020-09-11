/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// i total money
// o num of ways to make change
// c 1 pound is 100p, 2 pound is 200p
// e 

// brainstorm
//   recursion
//   modulo
//   arr of coins
//   possibly use decision tree
//     how to track visited paths
//     root node?
//     base case?
//   label 1 and 1 lb as 100 and 200 p to limit conversion calc
//   counter for solutions
//   subtract from input for each coin


var makeChange = function(total) {
    let coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let ways = 0;

};


