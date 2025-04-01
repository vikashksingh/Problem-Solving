/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let rows = grid.length-1;
    let cols = grid[0].length-1;
    const memo = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
    function solve(i,j) {
        if (i > rows || j > cols) return Number.MAX_SAFE_INTEGER;
        if (i == rows && j == cols) return grid[i][j];
        if(memo[i][j]) return memo[i][j];
        let right =  solve(i,j+1);
        let down = solve(i+1,j);
        let min = grid[i][j] + Math.min(right,down);
        memo[key] = min;
        return min
    }
    return solve(0,0);
};

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var minPathSum = function(grid) {
//     function minPath(row,col){
//         if(row < 0 || col < 0) return Number.MAX_SAFE_INTEGER;
//         return grid[row][col] + Math.min(minPath(row-1,col), minPath(row,col-1))
//     }
//     return minPath(grid.length-1,grid[0].length-1);
// };

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);