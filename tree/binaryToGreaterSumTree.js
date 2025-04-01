function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(0);
// root.left = new TreeNode(1);
// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(2);
// root.left.right.right = new TreeNode(3);
root.right = new TreeNode(1);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(7);
// root.right.right.right = new TreeNode(8);
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var idx = 0;
var bstToGst = function(root) {
  const afterSort = sortIt(root);
  const len = afterSort.length;
  for (let i = len - 2; i >= 0; i--) {
    afterSort[i] += afterSort[i + 1];
  }
  gstIt(root, afterSort, 0);
  return root;
};

var sortIt = function(root) {
  if (!root) return [];
  const left = sortIt(root.left);
  left.push(root.val);
  const right = sortIt(root.right);
  return left.concat(right);
};

var gstIt = function(root, arr) {
  if (!root) return;
  gstIt(root.left, arr);
  root.val = arr[idx++];
  gstIt(root.right, arr);
};

console.log(bstToGst(root));
