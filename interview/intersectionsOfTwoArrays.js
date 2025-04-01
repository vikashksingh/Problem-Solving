/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let result = [];
    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        } else if(nums2[j] < nums1[i]){
            j++;
        } else if(result.length == 0 || nums1[i] != result[result.length-1]) {
             result.push(nums1[i]);
             i++;
             j++;
        }
    }
    return result;
};

intersection([1,2,2,1],[2,2])