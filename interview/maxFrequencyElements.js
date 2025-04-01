/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = {};
    let max = 1;
    let res = 0;
    for(let num of nums){
        if(num in freq) {
            ++freq[num];
            max = Math.max(max,freq[num]);
        }else {
            freq[num] = 1;
        }
    }
    let values = Object.values(freq);
    for(let value of values){
        if(value == max) res += value;
    }
    return res;
};

maxFrequencyElements([1,2,2,3,1,4])