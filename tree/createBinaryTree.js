function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const treeHash = {};
  descriptions.map(node => {
    let key = node[0];
    if (!(key in treeHash)) {
      treeHash[key] = [];
    }

    if (node[2]) {
      treeHash[key][0] = node[1];
    } else {
      treeHash[key][1] = node[1];
    }
  });
  let root;
  const keys = Object.keys(treeHash);
  const notRoot = new Set();
  keys.forEach(key => {
    treeHash[key][0] && notRoot.add(treeHash[key][0]);
    treeHash[key][1] && notRoot.add(treeHash[key][1]);
  });
  for (let key of keys) {
    if (!notRoot.has(parseInt(key))) {
      root = parseInt(key);
      break;
    }
  }
  //   return root;
  function constructTree(start) {
    if (!(start in treeHash)) return new TreeNode(start);
    let left = treeHash[start][0] && constructTree(treeHash[start][0]);
    let root = new TreeNode(start);
    root.left = left;
    let right = treeHash[start][1] && constructTree(treeHash[start][1]);
    root.right = right;
    return root;
  }
  const tree = constructTree(root);
  return tree;
};

createBinaryTree([
  [39, 70, 1],
  [13, 39, 1],
  [85, 74, 1],
  [74, 13, 1],
  [38, 82, 1],
  [82, 85, 1]
]);
