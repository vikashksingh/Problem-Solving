/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const chars1 = new Array(26).fill(0);
    const chars2 = new Array(26).fill(0);
    for (let c of s){
        ++chars1[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    for (let c of t){
        ++chars2[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    let count = 0;
    for (let i = 0; i < 26; i++){
        if(chars2[i] > chars1[i]) count++;
    }
    return count;
};

minSteps('bab','aba');