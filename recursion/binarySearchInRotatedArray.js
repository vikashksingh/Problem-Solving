let arr = [4,6,7,8,9,1,2,3], target = 9;

function BSRA(arr, target, start, end) {
    if (start > end) return -1;
    let mid = start + Math.floor((end - start)/2);
    if (arr[mid] == target) return mid;
    if (arr[mid] >= arr[start]) {
        if (arr[mid] < target) return BSRA(arr,target,mid+1,end);
        else return BSRA(arr,target,start,mid-1);
    } else {
        return BSRA(arr,target,mid+1,end);
    }
}

console.log(BSRA(arr,target,0,7));