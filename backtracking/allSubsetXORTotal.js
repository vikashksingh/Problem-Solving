const subsets = [];
function generateSubsets(index, nums, subset = []) {
  if(index === nums.length-1) {
    subsets.push(subset);
    return
  };
  subset.push(nums[index]);
  generateSubsets(index+1, nums, subset);
  subset.pop();
  generateSubsets(index+1, nums, subset);
}

const result = generateSubsets(0,[5,1,6]);
console.log(subsets);