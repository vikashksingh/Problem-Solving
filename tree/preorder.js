function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
const root = new TreeNode(10);
root.left = new TreeNode(6);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(8);
root.right.right = new TreeNode(20);

function dfsRecursively(node) {
  if (!node) return [];
  const left = dfsRecursively(node.left);
  const right = dfsRecursively(node.right)
  return [node.val, ...left, ...right];
}

function dfsIteratively(node) {
  const stack = [];
  const preorder = [];
  stack.push(node);
  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      preorder.push(current.val);
      stack.push(current.right);
      stack.push(current.left);
    }
  }
  return preorder;
}

console.log(dfsIteratively(root));