/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const memo = new Array(questions.length).fill(0);
  function solve(index){
      if(index > questions.length-1) return 0;
      if(memo[index]) return memo[index];
      const takeIt = questions[index][0] + solve(index + questions[index][1] + 1);
      const leaveIt = solve(index+1);
      memo[index] = Math.max(takeIt, leaveIt);
      return memo[index];
  }
  return solve(0);
};