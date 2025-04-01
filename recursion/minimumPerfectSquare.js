/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // function solve(n, memo = {}){
    //     if(n in memo) return memo[n];
    //     if (n == 0) return [];
    //     if (n < 0) return null;
    //     let resultArr = null;
    //     let range = Math.floor(Math.sqrt(n));
    //     for(let i = 1; i <= range; i++){
    //         let next = i*i;
    //         let squares = solve(n - next, memo);
    //         if(squares) {
    //             squares = [next,...squares];
    //             if (!resultArr) resultArr = squares;
    //             if (resultArr && resultArr.length > squares.length) resultArr = squares;
    //         }
    //     }
    //     memo[n] = resultArr;
    //     return resultArr;
    // }
    // return solve(n);

    if(n < 4) return n;
    let range = Math.floor(Math.sqrt(n));
    let rangeValue = [];
    for(let i = 2; i <= range; i++){
        rangeValue.push(i*i);
    }
    let count = null;
    for(let i = 0; i < rangeValue.length; i++){
        let val;
        if((n % rangeValue[i]) == 0) {
            val = (n / rangeValue[i]);
        } else {
            val = (n % rangeValue[i]) + Math.floor((n / rangeValue[i]));
        }
        if(count) count = Math.min(count, val);
        else count = val;
    }
    return count;
};

console.log(numSquares(13));