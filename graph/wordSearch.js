/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    // function solve(i,j,str = ''){
    //     if(i < 0 || j < 0 || i > rows || j > cols) return;
    //     str += 
    // }
    const adjacencyList = {};
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(!(board[i][j] in adjacencyList)){
                adjacencyList[board[i][j]] = [];
            }
            let newI = i+1;
            if(newI > 0 && newI < rows && adjacencyList[board[i][j]].indexOf(board[newI][j]) == -1) adjacencyList[board[i][j]].push(board[newI][j]);
            newI = i-1;
            if(newI > 0 && newI < rows && adjacencyList[board[i][j]].indexOf(board[newI][j]) == -1) adjacencyList[board[i][j]].push(board[newI][j]);
            let newJ = j+1;
            if(newJ > 0 && newJ < rows && adjacencyList[board[i][j]].indexOf(board[i][newJ]) == -1) adjacencyList[board[i][j]].push(board[i][newJ]);
            newJ = j-1;
            if(newJ > 0 && newJ < rows && adjacencyList[board[i][j]].indexOf(board[i][newJ]) == -1) adjacencyList[board[i][j]].push(board[i][newJ]);
        }
    }
    let i = 0;
    while(i < word.length-1){
        if(adjacencyList[word[i]].indexOf(word[i+1]) == -1) return false;
        i++;
    }
    return true
};

exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB")