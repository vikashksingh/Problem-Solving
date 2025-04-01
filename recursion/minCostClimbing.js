/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    function solve(index){
        if(index >= cost.length-1) return 0;
        else return cost[index] + Math.min(solve(index+1),solve(index+2));
    }
    return Math.min(solve(0),solve(1))
};

minCostClimbingStairs([10,15,20])