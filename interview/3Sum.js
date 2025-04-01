/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a - b);
    let i = 0;
    let j = nums.length-1;
    while(i < j){
        let diff = 0 - (nums[i] + nums[j]);
        if(search(nums,i+1,j-1,diff) != -1){
            result.push([nums[i],nums[j],diff]);
            i++;
            j--;
        } else if(diff >= nums[j]) {
            i++;
        } else {
            j--;
        }
    }
    return result;
};

var search = function(nums, start, end, target) {
    var start = start;
    var end = end; 
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
                end = mid-1;
        } else {
            start = mid;
        }
    }
    return -1;
};

threeSum([0,1,1]);

// [-4,-1,-1,0,1,2]