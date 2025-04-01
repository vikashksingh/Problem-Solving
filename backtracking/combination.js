/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  function solve(newTarget, memo = {}) {
    if (newTarget in memo) return memo[newTarget];
    if (newTarget == 0) return [];
    if (newTarget < 0) return null;
    for (let candidate of candidates) {
      let currentTarget = newTarget - candidate;
      let res = solve(currentTarget, memo);
      if (res) {
        memo[newTarget] = [...res, candidate];
        if (memo[newTarget] && newTarget == target)
          result.push(memo[newTarget]);
      }
    }
    return memo[newTarget];
  }
  solve(target);
  return result;
};

combinationSum([2, 4, 6], 6);
