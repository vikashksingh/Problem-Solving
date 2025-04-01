/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    for(let i = 0; i < arr.length-1; i++){
        let temp = new Set();
        for(let i1 = 0; i1 < arr[i].length; i1++){
            if(!(temp.has(arr[i][i1]))) temp.add(arr[i][i1]);
            else arr[i] = "";
        }
        for(let j = i+1; j < arr.length; j++){
            for(let j1 = 0; j1 < arr[j].length; j1++){
                let temp2 = new Set();
                if(!(temp2.has(arr[j][j1]))) temp2.add(arr[j][j1]);
                else {
                    arr[j] = "";
                    break;
                }
                if(temp.has(arr[j][j1])) {
                    if(arr[j].length > arr[i].length){
                        arr[i] = "";
                    } else {
                        arr[j] = "";
                    }
                }
            }
        }
    }
    return arr.join('').length;
};

maxLength(["aa","bb"])