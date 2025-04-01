/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const mod = 1e9 + 7;
    let count = 0;
    function solve(r,c,x){
        if(r < 0 || c < 0 || r > m-1 || c > n-1) {
            if(x <= maxMove) {
                count = (count%mod) + 1;
            }
            return;
        }
        for(let i = 1; i <= maxMove; i++){
            solve(r+1,c,i);
            solve(r-1,c,i);
            solve(r,c+1,i);
            solve(r,c-1,i);
        }
    }
    solve(startRow,startColumn,0);
    return count;
};

findPaths(2,2,2,0,0)