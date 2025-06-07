function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

function printLevelWise1(){
  if(!root) return;
  let queue = [root];
  while(queue.length){
    let node = queue.shift();
    console.log(node.val);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
}

function printLevelWise(){
  if(!root) return;
  let queue = [root];
  let depth = 1;
  while(queue.length){
    let arr = [];
    let temp = depth;
    while(temp) {
      let node = queue.shift();
      if(node){
        arr.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      temp--;
    }
    console.log(arr.join(' '));
    depth *= 2;
  }
}

printLevelWise()

// printLevelWise1();