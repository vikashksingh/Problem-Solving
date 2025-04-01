/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let len = nums.length;
    let prefixSum = [nums[0]];
    let suffixSum = [];
    suffixSum[len-1] = nums[len-1];
    for (let i = 1, j = len-2; i < len && j >=0; i++,j--){
        prefixSum[i] = prefixSum[i-1] + nums[i];
        suffixSum[j] = suffixSum[j+1] + nums[j];
    }
    let result = [];
    for (let i = 0; i < len; i++){
        if (i == 0) result[i] = suffixSum[i] - (nums[i] * (len-i))
        else result[i] = suffixSum[i] - (nums[i] * (len-i)) + Math.abs(prefixSum[i-1] - (nums[i] * i));
    }
    return result;
};

getSumAbsoluteDifferences([1,4,6,8,10])