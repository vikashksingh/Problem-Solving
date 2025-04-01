function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 const root = new TreeNode(1);
 root.left = new TreeNode(2);
 root.right = new TreeNode(3);
 root.left.left = new TreeNode(4);
 root.right.left = new TreeNode(5);
 root.right.right = new TreeNode(6);
 root.right.left.left = new TreeNode(7);
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    // function getHeight(node){
    //     if(!node) return [];
    //     let left = getHeight(node.left);
    //     left.push(node.val);
    //     let right = getHeight(node.right);
    //     right.push(node.val);
    //     if(right.length > left.length){
    //         return right;
    //     } else return left;
    // }
    // let height = getHeight(root);
    // return height[0];

    const queue = [root];
    let node = root;
    while(queue.length){
        node = queue.pop();
        result.push(node.val);
        if(node.left) queue.unshift(node.left);
        if(node.right) queue.unshift(node.right);
    }
    return node.val;
};

console.log(findBottomLeftValue(root));