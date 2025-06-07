function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  return dfs(root)[1];
};

function dfs(root) {
  if (!root) {
      return [0, null];
  }

  let left = dfs(root.left);
  let right = dfs(root.right);

  if (left[0] > right[0]) {
      return [left[0] + 1, left[1]];
  }
  if (left[0] < right[0]) {
      return [right[0] + 1, right[1]];
  }
  return [left[0] + 1, root];
}
dfs(root);