// divide the array

function divideArray(arr,start,end){
    if (start == end) return [arr[start]];
    let mid = start + Math.floor((end-start)/2);
    let left = divideArray(arr,start,mid);
    let right = divideArray(arr,mid+1,end);
    return mergeArray (left,right,0,0)
}

console.log(divideArray([8,3,4,12,5,6],0,5));

function mergeArray(arr1, arr2, s1, s2, res = []){
    if (s1 >= arr1.length && s2 >= arr2.length) return res;
    if(s1 >= arr1.length) {
        res.push(arr2[s2]);
        return mergeArray(arr1,arr2,s1,s2+1,res);
    } else if (s2 >= arr2.length) {
        res.push(arr1[s1]);
        return mergeArray(arr1,arr2,s1+1,s2,res);
    }
    if (arr1[s1] < arr2[s2]) {
        res.push(arr1[s1]);
        return mergeArray(arr1,arr2,s1+1,s2,res);
    }
    if(arr1[s1] > arr2[s2]) {
        res.push(arr2[s2]);
        return mergeArray(arr1,arr2,s1,s2+1,res);
    }
}

// console.log(mergeArray([5],[2,4],0,0));