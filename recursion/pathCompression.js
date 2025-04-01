var arr = [0,0,1,2,3,4];

function pathCompression(x){
    if (x == arr[x]) return x;
    return arr[x] = pathCompression(arr[x]);
}
pathCompression(5);