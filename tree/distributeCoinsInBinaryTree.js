function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(3);
root.left = new TreeNode(0);
root.right = new TreeNode(0);

var distributeCoins = function(root) {
    function solve(node){
        if(!node) return [];
        let nodes = [];
        let left = solve(node.left);
        nodes = [node.val, ...left];
        let right = solve(node.right);
        nodes = [node.val, ...right];
        return nodes;
    }
    let result = solve(root);
};

distributeCoins(root);