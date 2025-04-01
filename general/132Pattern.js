var find132pattern = function(nums) {
    var maxright = nums[nums.length-1];
    var minleft = nums[0];
    var monotonicAsc = [minleft];
    var monotonicDesc = [maxright];
    for (var num of nums){
        if(num < minleft) {
            minleft = num;
            monotonicAsc.push(minleft);
        }
    }
    for (var i = nums.length-2; i >= 0; i--){
        if(nums[i] > maxright) {
            maxright = nums[i];
            monotonicDesc.push(maxright);
        }
    }
    for (var i = 0; i < monotonicAsc.length; i++){
        for (var j = 0; j < monotonicDesc.length-1; j++){
            if(monotonicDesc[j] > monotonicAsc[i] && monotonicDesc[j] < monotonicDesc[j+1] && monotonicDesc[j+1] > monotonicAsc[i]){
                return true;
            }
        }
    }
    return false;
};
find132pattern([1,0,1,-4,-3]);