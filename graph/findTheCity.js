/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
  const adjList = {};
  edges.map(edge => {
    let [to, from, weight] = edge;
    if (!(to in adjList)) {
      adjList[to] = [];
    }
    if (!(from in adjList)) {
      adjList[from] = [];
    }
    adjList[to].push([from, weight]);
    adjList[from].push([to, weight]);
  });
  const cityWithinThreshold = {};
  const keys = Object.keys(adjList);
  for (let key of keys) {
    cityWithinThreshold[key] = helper(key);
  }

  function helper(key, visited = new Set(), threshold = 0, count = 0) {
    if (visited.has(key) || threshold > distanceThreshold) return count - 1;
    let localThreshold = 0;
    for (let i = 0; i < adjList[key].length; i++) {
      count++;
      visited.add(key);
      threshold += adjList[key][i][1];
      localThreshold +=
        adjList[key][i][1] +
        helper(adjList[key][i][0], visited, threshold, count);
    }
    return localThreshold;
  }
};

findTheCity(
  4,
  [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1]
  ],
  4
);
