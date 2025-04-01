

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
  var root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // iteratively
    if(!root) return [];
    const ino = [];
    const stk = [];
    let curr = root;
    while(curr || stk.length){
        while(curr){
            stk.push(curr);
            curr = curr.left;
        }
        curr = stk.pop();
        ino.push(curr.val);
        curr = curr.right;
    }
    return ino; 
    // recursively
    // if (root == null) return [];
    // inorderTraversal(root.left,res);
    // res.push(root.val);
    // inorderTraversal(root.right,res);
    // return res;
};
inorderTraversal(root);

