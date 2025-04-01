function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 const root = new TreeNode(1);
 root.left = new TreeNode(5);
 root.right = new TreeNode(3);
 root.left.right = new TreeNode(4);
 root.left.right.left = new TreeNode(9);
 root.left.right.right = new TreeNode(2);
 root.right = new TreeNode(3);
 root.right.left = new TreeNode(10);
 root.right.right = new TreeNode(6);
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    // const stck = [root];
    // let count = 0;
    // while(stck.length){
    //     let node = stck.pop();
    //     if(node.left && node.left.left) {
    //         stck.push(node.left.left);
    //         count++;
    //     }
    //     if(node.left && node.left.right) {
    //         stck.push(node.left.right);
    //         count++;
    //     }
    //     if(node.right && node.right.left) {
    //         stck.push(node.right.left);
    //         count++;
    //     }
    //     if(node.right && node.right.right) {
    //         stck.push(node.right.right);
    //         count++;
    //     }
    // }
    // return count ? count+1 : count;
    const map = {};
    function convert(current,parent,map){
        if(!current) return;
        if(!(current.val in map)) {
            map[current.val] = [];
        }
        const adjacentList = map[current.val];
        if(parent != 0) adjacentList.push(parent);
        if(current.left) adjacentList.push(current.left.val);
        if(current.right) adjacentList.push(current.right.val);
        convert(current.left,current.val,map);
        convert(current.right,current.val,map);
    }
    let minute = 0;
    function BFS(){
        const queue = [start];
        const visited = new Set();
        visited.add(start);
        while(queue.length) {
            let levelSize = queue.length;
            while(levelSize > 0){
                let node = queue.shift();
                for(let item of map[node]) {
                    if(!visited.has(item)) {
                        queue.push(item);
                        visited.add(node);
                    }
                }
                levelSize--;
            }
            minute++
        }
    }
    convert(root,0,map);
    BFS(start);
    return minute-1;
};
amountOfTime(root,3);