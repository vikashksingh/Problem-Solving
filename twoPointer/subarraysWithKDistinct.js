/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const set = new Set();
    let count = 0;
    for(let end = 0, start = 0; end < nums.length; end++){
        set.add(nums[end]);
        if(set.size > k || end == nums.length-1){
            if(set.size == k) count++;
            set.clear();
            end = start;
            start++;
        }
        if (set.size == k){
            count++;
        }
    }
    return count;
};

subarraysWithKDistinct([2,1,2,1,2],2)