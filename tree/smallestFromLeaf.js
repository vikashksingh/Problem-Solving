/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(4);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
// root.left.right.left = new TreeNode(0);
// root.right.left = new TreeNode(1);

var smallestFromLeaf = function(root) {
    const alphas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    function solve(root){
        if(!root.left && !root.right) return alphas[[root.val]];
        let left = (root.left && solve(root.left)) || '';
        let right = (root.right && solve(root.right)) || '';
        let rootAlpha = alphas[[root.val]];

        if(left && right){
            if(left < right){
                return left += rootAlpha;
            } else {
                return right += rootAlpha;
            }
        } else if (left){
            return left += rootAlpha;
        } else {
            return right += rootAlpha;
        }
    }
    let res = solve(root);
    return res;
};

smallestFromLeaf(root);