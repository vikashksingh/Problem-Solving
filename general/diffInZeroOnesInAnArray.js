/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let onesRow = [];
    let zerosRow = [];
    let onesCol = [];
    let zerosCol = [];
    for (let i = 0; i < grid.length; i++){
        let ones = 0;
        let zeros = 0;
        for (let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 0) zeros++;
            else ones++;
        }
        onesRow.push(ones);
        zerosRow.push(zeros);
    }
    for (let i = 0; i < grid[0].length; i++){
        let ones = 0;
        let zeros = 0;
        for (let j = 0; j < grid.length; j++){
            if(grid[j][i] == 0) zeros++;
            else ones++;
        }
        onesCol.push(ones);
        zerosCol.push(zeros);
    }
    let diff = [];
    for (let i = 0; i < grid.length; i++){
        diff.push([]);
        for (let j = 0; j < grid[0].length; j++){
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }
    return diff;
};

// onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]]);
onesMinusZeros([[1,1,1],[1,1,1]]);