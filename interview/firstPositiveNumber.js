/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while(i < nums.length){
        let correct = nums[i]-1;
        if(nums[i] > 0 && nums[i] < nums.length && nums[correct] != nums[i]){
            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
        }
    }
    for(let j = 0; j < nums.length; j++){
        if(j+1 != nums[j]) return j+1;
    }
    return nums.length+1;
};

firstMissingPositive([5,4,9,8,7,6,5,4,8])