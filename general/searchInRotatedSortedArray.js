var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let pivotIndex;
    while(start != end){
        let testIndex = start + Math.floor((end-start)/2);
        if (nums[testIndex] > nums[testIndex-1]) start = testIndex;
        else end = testIndex;
    }
    pivotIndex = start
    return pivotIndex;
};

search([4,5,6,7,0,1,2])