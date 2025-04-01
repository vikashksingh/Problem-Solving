/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // nums.sort((a,b) => a - b);
    // let len = nums.length;
    // return (nums[len-1] * nums[len-2]) - (nums[0] * nums[1]);
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;;
    let secondMax = Number.MIN_SAFE_INTEGER;;
    let secondMin = Number.MAX_SAFE_INTEGER;;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
        } else secondMax = Math.max(nums[i], secondMax);
        if (nums[i] < min) {
            secondMin = min;
            min = nums[i];
        } else secondMin = Math.min(nums[i], secondMin);
    }
    return (max * secondMax) - (min * secondMin);
};