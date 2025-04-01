var maxDotProduct = function(nums1, nums2) {
    var nums1Len = nums1.length;
    var nums2Len = nums2.length;
    var len = nums1.length > nums2.length ? nums2.length : nums1.length;
    var max = Number.MIN_SAFE_INTEGER;

    function solve(subLen, memo){
        if(subLen > len) return;
        for (var i = 0; i < nums1Len;){
            var temp1 = nums1.slice(i,i+subLen);
            for (var j = 0; j < nums2Len;){
                var temp2 = nums2.slice(j,j+subLen);
                var k = 0;
                var sum = 0
                while(k < subLen){
                    sum += (temp1[k] * temp2[k]);
                    // memo[+temp1[k] + temp2[k]] = sum;
                    k++;
                }
                if (sum > max) {
                    max = sum;
                }
                j += subLen;
            }
            i += subLen;
        }
        solve(subLen+1);
    }
    solve(1);
    return max;
};

console.log(maxDotProduct([2,1,-2,5],[3,0,-6]));