let obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
var uniquePathsWithObstacles = function() {
    // let mod = 2000000000;
    let count = 0;
    function solve(i,j) {
        if (j > obstacleGrid[0].length - 1) return false;
        if (i > obstacleGrid.length - 1) return false;
        if (obstacleGrid[i][j] == 1) return false;
        if (solve(i+1,j)) count++;
        if (solve(i,j+1)) count++;
    }
    solve(0,0);
    return count;
};

uniquePathsWithObstacles();