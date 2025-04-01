
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

 var root1 = new TreeNode(3);
 root1.left = new TreeNode(5);
 root1.left.left = new TreeNode(6);
 root1.left.right = new TreeNode(2);
 root1.left.right.left = new TreeNode(7);
 root1.left.right.right = new TreeNode(4);
 root1.right = new TreeNode(1);
 root1.right.left = new TreeNode(9);
 root1.right.right = new TreeNode(8);

 var root2 = new TreeNode(3);
 root2.left = new TreeNode(5);
 root2.left.left = new TreeNode(6);
 root2.left.right = new TreeNode(7);
 root2.right = new TreeNode(1);
 root2.right.left = new TreeNode(4);
 root2.right.right = new TreeNode(2);
 root2.right.right.left = new TreeNode(9);
 root2.right.right.right = new TreeNode(8);
 
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function solve(root){
        if(!root) return [];
        if(!root.left && !root.right) return [root.val];
        const left = solve(root.left);
        const right = solve(root.right);
        return [...left,...right];
    }
    const leaf_similar1 = solve(root1);
    const leaf_similar2 = solve(root2);
    if(leaf_similar1.length != leaf_similar2.length) return false;
    for(let i = 0; i < leaf_similar1.length; i++){
        if(leaf_similar1[i] != leaf_similar2[i]) return false;
    }
    return true;
};

leafSimilar(root1,root2)