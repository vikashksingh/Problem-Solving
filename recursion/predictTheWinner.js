/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    function solve(start,end){
        let choice1 = nums[start] + solve(start+1,end);
        let choice2 = nums[end] + solve(start,end-1);
        return Math.max(choice1,choice2)
    }
};

predictTheWinner([1,5,2])