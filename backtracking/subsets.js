function subsets(nums) {
  const result = [];
  function backtrack(start, subset) {
    result.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  }
  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));