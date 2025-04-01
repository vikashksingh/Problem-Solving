/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const freq = {};
    for (let num of nums){
        if(num in freq) ++freq[num];
        else freq[num] = 1;
    }
    const values = Object.values(freq);
    let res = 0;
    for(let value of values){
        if(value%2 == 1 && value%3 == 1) return -1;
        while(value-3 != 2 || value-3 != 4 || value-3 >= 0){
            value = value - 3;
            res++;
        }
        if (value == 2) res++;
        if (value == 4) res += 2;
    }
    return res;
};

minOperations([14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12])