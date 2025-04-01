let arr = [1,2,3,3,3,9], target = 8;

function indexList(arr,target,curIndex){
    if (curIndex == arr.length) return [];

    let result = [];

    if (arr[curIndex] == target) {
        result.push(curIndex);
    }
    
    let indexes = indexList(arr,target,curIndex+1);
    result = [...result,...indexes];
    return result;
}
console.log(indexList(arr,target,0));


