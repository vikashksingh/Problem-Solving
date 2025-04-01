/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  let count = 0;
  if (nums[0] % k == 0) count++;
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
    if (nums[i] % k == 0) count++;
  }
  let i = 0;
  while (i < nums.length) {
    for (let j = i + 1; j < nums.length; j++) {
      nums[j] -= nums[i];
      if (nums[j] % k == 0) count++;
    }
    i++;
  }
  return count;
};

subarraysDivByK([4, 5, 0, -2, -3, 1], 5);
