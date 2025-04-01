/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash = {};
    for(let key of arr){
        if(key in hash){
            hash[key]++;
        } else {
            hash[key] = 1;
        }
    }
    const values = Object.values(hash);
    const set = new Set();
    for(let value of values){
        if(set.has(value)) return false;
        else set.add(value);
    }
    return true;
};
uniqueOccurrences([1,2])