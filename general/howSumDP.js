// given an array of positive integer, is it possible to generate target sum if yes return those numbers, a number in an array can be used multiple times; 

function howSum(nums, target,memo = {}){
    if(target in memo) return memo[target];
    if(target < 0) return null;
    if(target == 0) return [];
    for(var num of nums){
        var newTarget = target - num;
        var resultNum = howSum(nums,newTarget,memo);
        if(resultNum!=null){
            memo[target] = [...resultNum,num];;
            return memo[target];
        }
    }
    memo[target] = null;
    return memo[newTarget];
}

console.log(howSum([5,2,4,3],8));
console.log(howSum([14,7],300));
