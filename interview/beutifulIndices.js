/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    const slen = s.length;
    const alen = a.length;
    const blen = b.length;
    let i = 0, next1 = alen;
    const arr1 = [], arr2 = []
    for(;i <= slen - alen; i++){
        if(s.substring(i,i+next1) == a) arr1.push(i);
    }
    let j = 0, next2 = blen;
    for(;j <= slen - blen; j++){
        if(s.substring(j,j+next2) == b) arr2.push(j);
    }
    let res = [];
    for (let l = 0; l < arr1.length; l++){
        if(Math.abs(arr1[l]-arr2[l]) <= k) res.push(arr1[l]);
    }
    return res;
};

beautifulIndices("ocmm","m","oc",3);