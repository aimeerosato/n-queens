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
  var solution; //fixme
  // puts it into an object weird
  // {"0":[1,0,0,0],"1":[0,1,0,0],"2":[0,0,1,0],"3":[0,0,0,1],"n":4}
  var board = new Board({n:n})
  // Create board - an array that holds all the other arrays
  // populate it with empty arrays
  // var board = [];
  // for(var i = 0; i < n; i++){
  //   board[i] = [];
  //   for(var j = 0; j < n; j++){
  //     board[i][j] = 0;
  //   }
  // }
  
  //create counter for n number of players placed
  var players = 0;
  //create empty board
  //toggle(0,0);
  for(var x = 0; x < n; x++){
    //so....why can't i use it?
    board.togglePiece(x,x);
    players++;
  }

  if(players === n){
    solution = board.rows();
  }

  //board[0][0] = 1;
  //place piece at 0,0
    //increment 1
  //check for rook conflicts
  //place next piece where no conflicts
    //increment 2
  //continue until the end



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
