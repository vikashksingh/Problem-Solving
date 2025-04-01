var reductionOperations = function(nums) {
    nums.sort((a,b) => a - b);
    let count = 0;
    let steps = 0;
    for (let i = 1; i < nums.length;i++){
        if(nums[i] != nums[i-1]) steps++;
        count += steps;
    }
    return count;
};

console.log(reductionOperations([1,1,2,2,3]));