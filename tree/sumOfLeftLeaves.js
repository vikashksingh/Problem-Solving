function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 const root = new TreeNode(3);
 root.left = new TreeNode(9);
 root.right = new TreeNode(20);
 root.left.left = new TreeNode(15);
 root.left.right = new TreeNode(7);
/**
 * @param {TreeNode} root
 * @return {number}
 */
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    // function solve(node, isLeft){
    //     if(!node) return 0;
    //     if(!node.left && !node.right){
    //         return isLeft ? node.val : 0;
    //     }
    //     let left = solve(node.left, true);
    //     let right = solve(node.right, false);
    //     return left + right;
    // }
    // return solve(root,false);
    const queue = [{
        node: root,
        isLeft: false
    }];
    let result = 0;
    while(queue.length){
        let deq = queue.pop();
        if (deq.isLeft && !deq.node.left && !deq.node.right){
            result += deq.node.val;
        }
        if(deq.left) queue.unshift({
            node: deq.left,
            isLeft: true
        });
        if(deq.right) queue.unshift({
            node: deq.right,
            isLeft: false
        });
    }
    return result;
};

sumOfLeftLeaves(root)