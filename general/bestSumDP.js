// given an array of positive integer, is it possible to generate target sum if yes return those numbers, a number in an array can be used multiple times; 

function bestSum(nums, target,memo={}){
    if(target in memo) return memo[target];
    if(target < 0) return null;
    if(target == 0) return [];
    var shortestCombination = null;
    for(let num of nums){
        var newTarget = target - num;
        var resultNum = bestSum(nums,newTarget,memo);
        if(resultNum !== null){
            var result = [...resultNum, num];
            if(shortestCombination === null || result.length < shortestCombination.length){
                shortestCombination = result;
            }
        }
    }
    memo[target] = shortestCombination
    return memo[target];
}

// console.log(bestSum([1,2,5],4));
// console.log(bestSum([14,7],300));
console.log(bestSum([5,2,4,3],8));
