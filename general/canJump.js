var canJump = function(nums) {
    function solve(idx, memo={}){
        if (idx in memo) return memo[idx];
        if(idx >= nums.length-1) return true;
        for (let i = 1; i <= nums[idx]; i++){
            if(solve(idx+i)){
                memo[idx] = true;
                return memo[idx];
            }
        }
        memo[idx] = false;
        return memo[idx];
    }
    return solve(0);
};

console.log(canJump([3,2,1,0,4]))