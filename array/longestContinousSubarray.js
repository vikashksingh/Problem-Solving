/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let i = 0;
  let j = nums.length - 1;
  while (true) {
    let k = i;
    for (; k <= j; k++) {
      if (Math.abs(nums[i] - nums[k]) > limit) {
        i++;
        break;
      }
    }
    if (k == j) return j - i + 1;
  }
};

longestSubarray([8, 2, 4, 7], 4);
