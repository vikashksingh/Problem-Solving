/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    const result = new Array(mat.length+1).fill(0).map(() => new Array(mat[0].length+1).fill(0));
    for(let i = 0; i <= rows; i++){
        result[0][i] = Number.MAX_SAFE_INTEGER-1;
    }
    for(let i = 0; i <= cols; i++){
        result[i][0] = Number.MAX_SAFE_INTEGER-1;
    }
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(mat[i][j] == 0) result[i+1][j+1] = 0;
            else {
                let k = j+1;
                let l = i+1;
                let count1 = Number.MAX_SAFE_INTEGER;;
                let count2 = Number.MAX_SAFE_INTEGER;;
                while(k < rows){
                    if(mat[i][k] == 0){
                        count1 = k - i;
                        break;
                    } else {
                        k++;
                    }
                }
                while(l < cols){
                    if(mat[l][j] == 0){
                        count2 = l - j;
                        break;
                    } else {
                        l++;
                    }
                }
                result[i+1][j+1] = Math.min(...[1+result[i][j+1], 1+result[i+1][j],count1, count2]);
            }
        }
    }
    return result;
};

updateMatrix([[1,1,0,0,1,0,0,1,1,0],[1,0,0,1,0,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,0,0,1,1,1],[0,1,0,1,1,0,1,1,1,1],[1,1,1,0,1,0,1,1,1,1]])