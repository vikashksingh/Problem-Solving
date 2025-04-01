var jump = function(nums) {
  // const max = Number.MAX_SAFE_INTEGER;
  const dp = new Array(nums.length).fill(0);
  const finalIndex = nums.length - 1;
  for (let i = finalIndex - 1; i >= 0; i--) {
    if (finalIndex - i <= nums[i]) dp[i] = 1;
    // else if(nums[i] + dp[i+nums[i]] < finalIndex-i) dp[i] = max;
    else dp[i] = 1 + Math.min(dp[i + 1], nums[i] + dp[i + nums[i]]);
  }
  return dp[0];
};

console.log(jump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
