/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let result = 0;
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] - nums[j] == nums[j] - nums[k]) result++;
            }
        }
    }
    return result;
};

numberOfArithmeticSlices([2,4,6,8,10]);