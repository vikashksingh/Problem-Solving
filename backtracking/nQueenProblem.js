// var chessBoard = [
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0]
// ];

var chessBoard = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

// var chessBoard = [
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]

var noOfQueens = chessBoard.length;

function solveNQueen(arr) {
  if(isQueenSet(0)){
      return arr;
  } else {
      console.log('cant place queens');
  }
}

function isQueenSet(colIndex) {
  if(colIndex == noOfQueens) return true;
  for(var i = 0; i < chessBoard.length; i++){
      if(isPlacedValid(i,colIndex)) {
          chessBoard[i][colIndex] = 1;
          if(isQueenSet(colIndex+1)) return true;
          chessBoard[i][colIndex] = 0; // backtracking
      }
  }
  return false;
}

function isPlacedValid(rowIndex, colIndex) {
  for (var i = 0; i < colIndex; i++) {
      if(chessBoard[rowIndex][i] == 1) return false;
  }
  // diagonal check top left to bottom right 
  for (var i = rowIndex, j = colIndex; i >=0 && j >= 0; i--,j--){
      if(chessBoard[i][j] == 1) return false;
  }
  // diagonal check top right to bottom left
  for(var i = rowIndex, j = colIndex; i < chessBoard.length && j >= 0; i++,j--){
      if(chessBoard[i][j] == 1) return false;
  }
  return true;
}

solveNQueen(chessBoard);