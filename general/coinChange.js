var coinChange = function(coins, amount) {
  coins.sort((a, b) => b - a);
  function solve(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount == 0) return [];
    if (amount < 0) return null;
    for (let coin of coins) {
      let remAmnt = amount - coin;
      let arr = solve(coins, remAmnt, memo);
      if (arr != null) {
        memo[amount] = [...arr, coin];
      }
    }
    return memo[amount];
  }
  return solve(coins, amount);
};

console.log(coinChange([1, 2, 5], 11));
