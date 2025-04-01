/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0;
    let j = 0;
    let zeros = 0;
    while(j < nums.length){
        if(!nums[j]) zeros++;
        if(zeros > k){
            if(!nums[i]) zeros--;
            i++;
        }
        j++;
    }
    return j-i;
};

longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)