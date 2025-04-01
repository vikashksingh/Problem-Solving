/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;
    function solve(i,j){
        if(i >= rows || j >= cols || parseInt(matrix[i][j]) == 0) return 0;
        let length = 1 + solve(i+1,j);
        let breadth = 1 + solve(i, j+1);
        return length * breadth;
    }
    for(let i = 0;  i < rows; i++){
        for(let j = 0;  j < cols; j++){
            maxArea = Math.max(maxArea, solve(i,j));
        }
    }
    return maxArea;
};

maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);