/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let row = nums.length;
    let col = nums[0].length;
    for (let el of nums) {
        if (el.length > col) col = el.length;
    }
    let result = [];
    let i = 0, j = 0;
    while (i < row || j < col) {
        let innerI = i;
        let innerJ = j;
        while(innerJ < col){
            if (nums[innerI][innerJ]) {
                result.push(nums[innerI][innerJ]);
            }
            innerJ++;
            innerI--;
        }
        if (i < row-1) i++;
        else j++;
    }
    return result;
};

findDiagonalOrder([[1,2,3,4,5,6]]);