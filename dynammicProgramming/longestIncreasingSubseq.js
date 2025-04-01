/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = 0, maxLen = 0, lastMax;
    for (let i = 0; i < nums.length-1; i++){
        lastMax = nums[i];
        len = 0;
        for (let j = i+1; j < nums.length; j++){
            if (lastMax < nums[j]) {
                len++;
                lastMax = nums[j];
            }
            if (len > maxLen) maxLen = len;
        }
    }
    return maxLen + 1;
};

lengthOfLIS([0,1,0,3,2,3]);