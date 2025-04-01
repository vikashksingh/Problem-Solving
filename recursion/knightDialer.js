/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const grid = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];
    let verMove = [2,2,-2,-2];
    let horMove = [1,-1,-1,1];
    function solve(x,y){
        let count = 1;
        if (x < 0 || y < 0 || x > 2 || y > 3 || grid[x][y] == '*' || grid[x][y] == '#') return 0;
        else count++;
        if (count == n) return count;
        for(let i = 0; i < verMove.length; i++){
            let ymove = y + verMove[i];
            let xmove = x + horMove[i];
            let moves = solve(xmove,ymove);
            count += moves;
        }
        return count;
    }
    let result = 0;
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            result += solve(i,j);
        }
    }
    return result;
};

knightDialer(1);