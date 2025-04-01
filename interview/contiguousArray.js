/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const prefixSum = [];
    let sum = 0;
    for(let num of nums){
        sum += num;
        prefixSum.push(sum);
    }
    const len = prefixSum.length;
    for(let i = 0; i < len; i++){
        if((len - i) % 2) continue;
        if((prefixSum[len-1] - prefixSum[i]) == ((len - i)/2)) return len-i;
    }
    return 0;
};

findMaxLength([0,1,0])