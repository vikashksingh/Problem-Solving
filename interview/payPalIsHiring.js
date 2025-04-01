/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//     if(numRows == 1) return s;
//     const dia = numRows - 2;
//     const obj = {};
//     let down = 0;
//     let up = 0;
//     let i = 0;
//     let key = 0;
//     while(i < s.length){
//         obj[key] = '';
//         while(down != numRows && i < s.length){
//             obj[key] += s[i];
//             i++;
//             down++;
//         }
//         while(up != dia && i < s.length){
//             obj[++key] = s[i];
//             i++;
//             up++;
//         }
//         key++;
//         down = 0;
//         up = 0;
//     }
//     return obj;
// };

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    const arr = [];
    for (let r = 0; r < numRows; r++){
        arr[r] = '';
    }
    let currentLine = 0;
    let reachedEdge = true;
    for (let i = 0; i < s.length; ++i) {
        if (currentLine == 0 || currentLine == numRows - 1) {
            reachedEdge = !reachedEdge;
        }
        arr[currentLine] += s[i];
        if (!reachedEdge) {
            currentLine++;
        } else {
            currentLine--;
        }
    }

    let result = '';
    for (let i = 0; i < numRows; ++i) {
        result += arr[i];
    }
    return result;
};

console.log(convert('paypalishiring',4));