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
  var solution; 

  var board = new Board({n:n});
  
  //create counter for n number of players placed
  var players = 0;
  
  for(var x = 0; x < n; x++){
    board.togglePiece(x,x);
    players++;
  }

  if(players === n){
    solution = board.rows();
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //keep track of solutions
  var solutionCount = 0;

  //create a blank board
  var board = new Board({n:n});

  //internal function?  
  var solutionsCounter = function (rowInd){
  // Always start at top corner
  
    if(rowInd > n){
      solutionCount++;
      return;
    }
  // Travel through every index on board
    for(var j = 0; j < n; j++){
      board.togglePiece(rowInd, j);
      if(!board.hasAnyRooksConflicts()){
        solutionsCounter(rowInd+1, 0);
      }
      board.togglePiece(rowInd, j);
    }

  };

  solutionsCounter(0); 

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
