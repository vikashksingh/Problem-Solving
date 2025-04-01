var coinChange = function(coins, amount) {
    function solve(coins, amount, memo = {}) {
        if (amount in memo) return memo[amount];
        if (amount == 0) return [];
        if (amount < 0) return null;
        let fewestCoins = null;
        for (let coin of coins) {
            let newAmt = amount - coin;
            let res = solve(coins, newAmt, memo);
            let final
            if (res) {
                final = [coin, ...res];
            }
            if (final) {
                if (!fewestCoins) fewestCoins = [].concat(final);
                if (fewestCoins && fewestCoins.length > final.length) fewestCoins = [].concat(final);
            }
        }
        memo[amount] = fewestCoins;
        return fewestCoins;
    }
    let res = solve(coins, amount);
    console.log(res);
};

coinChange([1,3,4,5],7);