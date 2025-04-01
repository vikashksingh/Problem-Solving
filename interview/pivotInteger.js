var pivotInteger = function(n) {
    const prefixSum = [0];
    for(let i = 1; i <= n; i++){
        prefixSum[i] = prefixSum[i-1] +  i;
    }
    let suffixSum = 0;
    let j = n;
    while(j >= 1){
        suffixSum += j;
        if(suffixSum == prefixSum[j]) return j;
        if(suffixSum > prefixSum[j]) return -1;
        j-- 
    }
};

pivotInteger(4)