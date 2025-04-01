/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    function solve(i,j){
        if(i < 0 || j < 0 || i >= m || j >= n) return 0;
        if(grid[i][j] == 0) return 0;
        let up = solve(i-1,j);
        let down = solve(i+1,j);
        let left = solve(i,j-1);
        let right = solve(i,j+1);
        let current = grid[i][j];
        return Math.max(current, current + Math.max(...[up,down,left,right]));
    }
    return solve(0,0);
};

getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]])