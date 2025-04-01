/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0;
    let j = 0;
    let zcount = 0;
    let max = 0;
    for(;j < nums.length;j++){
        if (nums[j] == 0) zcount++;

        if (zcount <= k) {
            let len = j - i;
            if (len > max) {
                max = len;
            }
        }
        if (zcount > k) {
            while(zcount != k){
                if(nums[i] == 0) zcount--;
                i++;
            }
        }
        
    }
    return max;
};

longestOnes([1,0,1,0],0)