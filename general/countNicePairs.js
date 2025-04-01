/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const reverse = {};
    for (let num of nums) {
        if (!(num in reverse)) {
            reverse[num] = reverseNum(num);
        }
    }
    function reverseNum(num) {
        num = String(num).split('');
        let i = 0;
        let j = num.length - 1;
        while (i < j) {
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
            i++;
            j--;
        }
        return parseInt(num.join(''));
    }
    let count = 0;
    for (let i = 0, j = 1; i < nums.length - 1 && j < nums.length; i++, j++){
        if((nums[i] - reverse[nums[i]]) == (nums[j] - reverse[nums[j]])) {
            count++;
        }

    }
    return count;
};

countNicePairs([42,11,1,97])