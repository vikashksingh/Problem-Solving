// given an array of positive integer, is it possible to generate target sum, a number in an array can be used multiple times; 
function canSum(nums, target,memo = {}){
    if(target in memo) {
        return memo[target];
    }
    if (target == 0) return true;
    if(target < 0) return false;
    for (var num of nums){
        var rem = target - num;
        if (canSum(nums,rem,memo)){
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

console.log(canSum([5,2,4,3],8));
console.log(canSum([14,7],300));