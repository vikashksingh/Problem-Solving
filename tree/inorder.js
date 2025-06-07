function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  const root = new TreeNode(10);
  root.left = new TreeNode(6);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(8);
  root.right.right = new TreeNode(20);
  
  function dfsRecursively(node) {
    if (!node) return [];
    const left = dfsRecursively(node.left);
    // const stack = [...left, node.val];
    const right = dfsRecursively(node.right)
    // stack.push(...right);
    return [...left, node.val, ...right];   
  }

  function dfsIteratively(node) {
    const stack = [];
    const inorder = [];
    stack.push(node);
    while (stack.length > 0) {
      const current = stack.pop();
      if (current) {
        if(current.right) stack.push(current.right);
        if(current.left || current.right) stack.push(current);
        else {
          inorder.push(current.val);
        }
        if(current.left) stack.push(current.left);
      } else {
        inorder.push(stack.pop().val);
      }
    }
    return inorder;
  }
  
  console.log(dfsIteratively(root));