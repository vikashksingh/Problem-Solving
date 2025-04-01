/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  function solve(i, target) {
    if (target < 0) return [];
    for (let i = 0; i < candidates.length; i++) {
      let newTarget = target - candidates[i];
      let res = solve(i + 1, newTarget);
      res.push(candidates[i]);
      let sum = res.reduce((prev, next) => prev + next, 0);
      if (sum == target) result.push(res);
    }
  }
  solve(0, target);
  return result;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
