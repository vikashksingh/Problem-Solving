/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
  const adjacencyList = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in adjacencyList)) adjacencyList[a] = [];
    if (!(b in adjacencyList)) adjacencyList[b] = [];
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }

  function helper(graph, start, end, visited) {
    if (start == end) return 1;
    if (visited.has(start)) return 0;
    visited.add(start);
    let max = 0;
    for (let node of graph[start]) {
      max = Math.max(max, helper(graph, node, end, visited));
    }
    return succProb[start] * max;
  }

  return helper(adjacencyList, start_node, end_node, new Set());
};

maxProbability(
  3,
  [
    [0, 1],
    [1, 2],
    [0, 2]
  ],
  [0.5, 0.5, 0.2],
  0,
  2
);
