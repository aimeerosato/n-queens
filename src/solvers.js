/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  //possible solution [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]
  var solution = [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]; //fixme

  // Create board - an array that holds all the other arrays
  // populate it with empty arrays
  var board = [];
  for(var i = 0; i < n; i++){
    board[i] = [];
  }
  
  //create counter for n number of players placed
  var players = 0;
  board[0][0] = 1;
  //place piece at 0,0
    //increment 1
  //check for rook conflicts
  //place next piece where no conflicts
    //increment 2
  //continue until the end

  //https://jsbin.com/calicehoyi/edit?js,console
  //  var test = function (n) {
  //    var board = [];

  // for(var i = 0; i < n; i++){
  //   board[i] = [];
  // }
  //   board[0][0] = 1;
  //   board[0][1] = 0;
  //   board[0][2] = 0;
  //   board[0][3] = 0;
    
  //   board[1][0] = 0;
  //   board[1][1] = 1;
  //   board[1][2] = 0;
  //   board[1][3] = 0;
    
  //   board[2][0] = 0;
  //   board[2][1] = 0;
  //   board[2][2] = 1;
  //   board[2][3] = 0;
    
  //   board[3][0] = 0;
  //   board[3][1] = 0;
  //   board[3][2] = 0;
  //   board[3][3] = 1;
    
  //   return board;
  // };

//console.log(test(4));



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
