/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const preZeros = [];
    const postOnes = [];
    const len = s.length;
    if (s[0] == '0') preZeros[0] = 1;
    else preZeros[0] = 0;
    if (s[len - 1] == '1') postOnes[len-1] = 1;
    else postOnes[len-1] = 0;
    let i;
    for(i = 1; i < len-1; i++){
        preZeros[i] = preZeros[i-1];
        if(s[i] == '0') preZeros[i] += 1;
    }
    preZeros[i] = 0;
    for(i = s.length - 2; i > 0; i--){
        postOnes[i] = postOnes[i+1];
        if(s[i] == '1') postOnes[i] += 1;
    }
    postOnes[i] = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < len-1; i++){
        let sum = preZeros[i] + postOnes[i];
        max = Math.max(max,sum);
    }
    return max;
};

maxScore('011101');