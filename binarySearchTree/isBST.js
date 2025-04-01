function TreeNode(val, left, right) {
  this.data = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(2);
root.right = new TreeNode(7);
root.right.right = new TreeNode(8);
root.right.right.right = new TreeNode(9);
root.right.right.right.right = new TreeNode(10);
function isBST(
  root,
  low = Number.MIN_SAFE_INTEGER,
  high = Number.MAX_SAFE_INTEGER
) {
  if (!root) return true;
  if (root.data <= low || root.data >= high) return false;
  return isBST(root.left, low, root.data) && isBST(root.right, root.data, high);
}
console.log(isBST(root));
