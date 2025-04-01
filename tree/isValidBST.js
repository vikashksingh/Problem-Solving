function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(5);
root.right = new TreeNode(1);
root.left = new TreeNode(2);

var isValidBST = function(root) {
    function solve(root){
        if (!root.left && !root.right) return [root.val];
        let preOrder = [];
        let left = (root.left && solve(root.left)) || [];
        preOrder = [...preOrder,...left];
        preOrder.push(root.val);
        let right = (root.right && solve(root.right)) || [];
        return [...preOrder, ...right];
    }
    
    let preOrder = solve(root);
    for (let i = 1; i < preOrder.length; i++){
        if(preOrder[i-1] >= preOrder[i]) return false;
    }
    return true;
};
isValidBST(root)