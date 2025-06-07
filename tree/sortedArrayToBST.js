function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length == 0) return null;
  const mid = Math.floor(nums.length/2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0,mid));
  root.right = sortedArrayToBST(nums.slice(mid+1));
  return root;
};

var sortedArrayToBST2 = function(nums) {
  if(nums.length == 0) return null;
  const head = helper(nums, 0, nums.length-1);
  return head;
};

function helper(nums, low, high){
  if(low > high) return null;
  const mid = low + Math.floor((high-low) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = helper(nums, low, mid - 1);
  node.right = helper(nums, mid+1, high);
  return node;
}

sortedArrayToBST([-10,-3,0,5,9]);