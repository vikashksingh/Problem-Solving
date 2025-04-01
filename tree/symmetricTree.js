function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1);
root.right = new TreeNode(2);
root.left = new TreeNode(2);
root.left.left = new TreeNode(null);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(null);
root.right.right = new TreeNode(3);
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let queue = [root];
    let depth = 1;
    while(queue.length){
        let arr = [];
        let temp = depth;
        while(temp) {
            let node = queue.shift();
            if(node){
                arr.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
            temp--;
        }
        if(arr.length > 1 && (arr.length % 2) == 1) return false;
        let i = 0, j = arr.length-1;
        while(i<j){
            if(arr[i] != arr[j]) return false;
            i++;
            j--;
        }
        depth *= 2;
    }
    return true;
};

console.log(isSymmetric(root));