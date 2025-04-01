function rotateArray(arr,degree){
    const result = [];
    for(let i = arr.length-1; i >= 0; i--){
        let idx = (i - degree) % arr.length;
        if(idx < 0) {
            idx += arr.length
        }
        result[idx] = arr[i];
    }
    return result;
}

rotateArray([1,1,0,0],4)