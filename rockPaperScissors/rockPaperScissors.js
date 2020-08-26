/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// in throw
// out array of strings separated by commas
//// given a set, produce all combos of set
//// length would be num of games

// create result var set to empty arr

var rockPaperScissors = function () {
  var options = ["R", "P", "S"]
  var throws = [];
  for (var a = 0; a < options.length; a++) {
    for (var b = 0; b < options.length; b++) {
      for (var c = 0; c < options.length; c++) {
        throws.push(options[a] + options[b] + options[c]);
      }
    }
  }
  return throws;
};

