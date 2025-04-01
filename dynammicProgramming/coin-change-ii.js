/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// top-down approach
// var change = function(amount, coins) {
//     let result = 0;
//     function solve(coins, amount, memo = {}) {
//         if (amount in memo) return true;
//         if (amount == 0) return true;
//         if (amount < 0) return false;
//         let gres = false;
//         for (let coin of coins){
//             let rem = amount - coin;
//             let lres = solve(coins, rem, memo);
//             if (lres && !(amount in memo)) {
//                 result++;
//             }
//             gres = gres || lres
//         }
//         memo[amount] = gres;
//         return gres;
//     }
//     solve(coins,amount);
//     return result;
// };
// bottom - up approach
const change = function(amount, coins){
    const len = coins.length;
    coins.sort((a,b) => a - b);
    const dp = new Array(amount+1).fill(0);
    for(let i = 1; i < amount+1; i++){
        for(let coin of coins){
            let diff = i - coin;
            if(diff < 0) break;
            dp[i] = Math.min(dp[i], 1 + dp[diff])
        }
    }
    return dp[amount];
}

change(5,[1,2,5])