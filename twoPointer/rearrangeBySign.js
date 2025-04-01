/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const len = nums.length;
    // const pArr = [];
    // const nArr = [];
    const result = [];
    // for(let num of nums){
    //     if(num > 0) pArr.push(num);
    //     else nArr.push(num);
    // }
    let s = 0;
    let e = 1;
    let p = 0;
    let n = 1;
    while(s < len-1 && e < len){
        if(nums[s] > 0 && nums[e] > 0){
            result[p] = nums[s];
            p += 2;
            result[p] = nums[e];
            p += 2;
        } else if(nums[s] < 0 && nums[e] < 0){
            result[n] = nums[s];
            n += 2;
            result[n] = nums[e];
            n += 2;
        } else if(nums[s] < 0 && nums[e] > 0) {
            result[p] = nums[e];
            p += 2;
            result[n] = nums[s];
            n += 2;
        } else {
            result[p] = nums[s];
            p += 2;
            result[n] = nums[e];
            n += 2;
        }
        s += 2;
        e += 2;
    }
    return result;
};

rearrangeArray([3,1,-2,-5,2,-4])