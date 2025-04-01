
 // * Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

 var tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
// console.log(tree);
 

var searchBST = function(root, val) {
    var result = null
    function solve(root, val){
        if(root == null) return;

        if (root.val == val){
            result = root;
            return;
        }
        solve(root.left, val);
        solve(root.right, val);
        return;
    }
    solve(root,val);
    return result;
};

console.log(searchBST(tree, 9));

