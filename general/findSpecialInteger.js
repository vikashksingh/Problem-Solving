/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = 1;
    let max = {
        elem: arr[0],
        count: 1
    };
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] == arr[i-1]) count++;
        else {
            if(count > max.count) {
                max.count = count;
                max.elem = arr[i-1];
            };
            count = 1;
        }
    }
    if(count > max.count) {
        max.count = count;
        max.elem = arr[arr.length-1];
    };
    return max.elem;
};

findSpecialInteger([1,2,3,3])