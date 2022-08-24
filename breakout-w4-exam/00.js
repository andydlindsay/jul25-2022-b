"use strict";

/* Question 00

Given a collection of game outcome records, determine who all the players are by returning an array of their names.

The array should be ordered by how the names are encountered.

Example Input:

[
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
]

Expected Result:

['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']

*/


const allPlayerNames = function(outcomes) {
  // IMPLEMENT ME

  // create an output array
  const output = [];

  // loop through the provided array
  for (const outcome of outcomes) {
    // the element of the array will give us the winner and loser
    const winner = outcome.winner;
    const loser = outcome.loser;

    // if the winner is not in the output array, push the winner in
    if (!output.includes(winner)) {
      output.push(winner);
    }

    // if the loser is not in the output array, push the loser in
    if (!output.includes(loser)) {
      output.push(loser);
    }
  }

  // return the output array
  return output;
};


// Don't change below:
module.exports = { allPlayerNames };

// const allPlayerNames = function(outcomes) {
//   const players = [];
//   for (let outcome of outcomes) {
//     if (outcome.winner === outcome.loser) {
//       players.push(outcome.winner);
//     } else {
//       players.push(outcome.winner, outcome.loser);
//     }
//   }
//   let uniqueNames = [...new Set(players)];
//   return uniqueNames;
// };

// const allPlayerNames = function(outcomes) {
//   const winners = [];
//   for (let players in outcomes) {
//     winners.push(outcomes[players].winner);
//     winners.push(outcomes[players].loser);
//   }
//   const uniqueWinners = [...new Set(winners)];
//   return uniqueWinners;
// };


