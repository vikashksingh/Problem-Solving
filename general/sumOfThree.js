/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    num = Math.ceil(num/3) + 2;
    var nums = [];
    for (var i = 1; i <= num; i++){
        nums.push(i);
    }
    var i = 0;
    var j = 1;
    var k = 2;
    for (;i<nums.length-2;i++){
        if (nums[i] + nums[j] + nums[k] == num){
            return [nums[i],nums[j],nums[k]];
        }
        j++;
        k++;
    }
    return [];
};
sumOfThree(33)
