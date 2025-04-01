/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    let j = nums.length-1;
    const total = (j*(j+1))/2;
    let sum = 0;
    while(i <= j){
        if(i!=j && nums[i] == nums[j]) return nums[i];
        else {
            if(i == j) sum += nums[i];
            else sum += (nums[i]+nums[j]);
            i++;
            j--;
        }
    }
    return sum - total;
};

findDuplicate([1,3,4,2,2])