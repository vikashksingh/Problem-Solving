var uniquePaths = function(m, n) {
    // var dp = new Array(m).fill(new Array(n).fill(0));
    // for (var j = 0,i = 0; j < n; j++){
    //     dp[i][j] = 1;
    // }
    // for (var j = 1,i = 0; j < m; j++){
    //     dp[j][i] = 1;
    // }
    // for (var i = 1; i < m; i++){
    //     for (var j = 1; j < n; j++){
    //         dp[i][j] = dp[i-1][j] + dp[i][j-1];
    //     }
    // }
    // return dp[m-1][n-1];
    var count = 0;
    function solve(i,j,visited=[]){
        var key = '' + i + j;
        if (visited.indexOf(key) > -1) {
            return false;
        };
        if (i >= m || j >= n) return true;
        count++;
        visited.push(key);
        if(solve(i,j+1,visited)) {
            return solve(i+1,j,visited);
        }
        return true;
    }
    solve(0,0);
    return count;
};
console.log(uniquePaths(3,2));