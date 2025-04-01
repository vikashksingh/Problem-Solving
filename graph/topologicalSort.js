// const graph = {
//   a: ["b", "c"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: []
// };

const graph = {
  f: ["g", "i"],
  g: ["h"],
  i: ["k", "g"],
  h: [],
  k: [],
  j: ["i"]
};
const arr = ["f", "g", "i", "k", "h", "j"];
function topSort(graph, noOfNodes) {
  const v = [];
  const order = [];
  for (let i = 0; i < noOfNodes; i++) {
    v[i] = false;
    order[i] = 0;
  }
  let current = noOfNodes - 1;
  for (let at = 0; at < noOfNodes; at++) {
    if (v[at] == false) {
      const visitedNodes = [];
      dfs(at, v, visitedNodes, graph);
      for (let node of visitedNodes) {
        order[current--] = node;
      }
    }
  }
  return order;
}

function dfs(at, v, visitedNodes, graph) {
  v[at] = true;
  const edges = graph[arr[at]];
  for (let edge of edges) {
    let idx = arr.indexOf(edge);
    if (v[idx] == false) {
      dfs(idx, v, visitedNodes, graph);
    }
  }
  visitedNodes.push(arr[at]);
}

console.log(topSort(graph, 6));
