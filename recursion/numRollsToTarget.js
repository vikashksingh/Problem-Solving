/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    // let mod = 1000000007;
    function solve(target,n){
        let ways = 0;
        // if(target in memo) return memo[target];
        if(target == 0) return 1;
        if(target < 0) return 0;
        if(n == 0) return 0;
        for(let i = 1; i <= k; i++){
            let way = solve(target-i,n-1);
            ways += way;
        }
        // memo[target] = (ways % mod);
        return ways;
    }
    return solve(target,n)
};

console.log(numRollsToTarget(2,6,7));