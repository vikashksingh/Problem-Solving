function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  const parentLeafNodes = {};
  function solve(root) {
    if (!root) return;
    solve(root.left);
    solve(root.right);
    let key = root.val;
    if (!(key in parentLeafNodes)) {
      parentLeafNodes[key] = [];
    }
    if (root.left) parentLeafNodes[key].push(root.left.val);
    if (root.right) parentLeafNodes[key].push(root.right.val);
  }
  solve(root);
  const leafNodes = [];
  Object.keys(parentLeafNodes).forEach(leaf => {
    if (parentLeafNodes[leaf].length == 0) leafNodes.push(parseInt(leaf));
  });
  const goodNodes = [];
  for(let i = 0; i < leafNodes.length-1; i++){
    for(let j = i+1; j < leafNodes.length; j++){

    }
  }
  function calculateDistance(leaf1, leaf2)
};

countPairs(root);
