/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const set = new Set();
    const setR = new Set();
    for (let c of s){
        if (set.has(c) && !setR.has(c)){
            setR.add(c);
            set.delete(c);
        } else if (!setR.has(c)) {
            set.add(c);
        }
    }
    let chars = [... set];
    return chars.length >= 1 ? chars[0] : -1;
    
};

console.log(firstUniqChar('leetcode'));