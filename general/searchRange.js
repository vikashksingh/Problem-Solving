/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function binarySearch(start,end){
        // if (start > end) return -1;
        // var mid = Math.floor((start+end)/2);
        // if(nums[mid] == target) return mid;
        // if (target < nums[mid]) {
        //     return binarySearch(start, mid-1);
        // } else {
        //     return binarySearch(mid+1, end);
        // }
        while (start <= end){
            var mid = Math.floor((start+end)/2);
            if(nums[mid] == target) return mid;
            else if (nums[mid] < target) {
                start = mid+1;
                end = end;
            } else {
                start = start;
                end = mid-1;
            }
        }
        return -1;
    }
    var fidx = binarySearch(0,nums.length-1);
    var sidx = fidx;
    var arr1 = [fidx];
    var arr2 = [sidx];
    while (fidx >= 0) {
        fidx = binarySearch(0,fidx-1);
        arr1.push(fidx);
    }
    while(sidx >=0) {
        sidx = binarySearch(sidx+1, nums.length-1);
        arr2.push(sidx);
    }

    if (arr1.length == 1 && arr2.length == 1) return [-1,-1];
    else return [arr1[arr1.length-2],arr2[arr2.length-2]];
};

console.log(searchRange([5,7,7,8,8,10],8))