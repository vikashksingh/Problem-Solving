var maxOperations = function(nums, k) {
    var numsObj = {};
    var ops = 0;
    for (var num of nums){
        var target = k - num;
        if (num in numsObj){
            ops++;
            if(numsObj[num] > 1) --numsObj[num];
            else delete numsObj[num];
        } else {
            if (target in numsObj) ++numsObj[target];
            else numsObj[target] = target;
        }
    }
    return ops;
};

console.log(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2],3));

// console.log(maxOperations([4,-1,-1,4],3));