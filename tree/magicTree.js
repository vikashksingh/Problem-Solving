var magicTree = function (n, edges) {
    // code here
    const adjacencyList = {};
    const result = [];
    for (let edge of edges) {
        let s = edge[0];
        let d = edge[1];
        let t = edge[2];
        if (!(s in adjacencyList)) {
            adjacencyList[s] = [];
        }
        if (!(d in adjacencyList)) {
            adjacencyList[d] = [];
        }
        adjacencyList[s].push([d, t]);
        adjacencyList[d].push([s, t]);
    }
    let keys = Object.keys(adjacencyList);
    const magicalNodes = [];
    for (let key of keys) {
        if (adjacencyList[key].length == 1)
            magicalNodes.push(key);
    }
    for (let i = 0; i < n; i++) {
        let t = Number.MAX_SAFE_INTEGER;
        for (let j of magicalNodes) {
            t = Math.min(t, dfs(i, j, new Set()));
        }
        result.push(t);
    }
    function dfs(s, d, visited) {
        if (s == d)
            return 0;
        if (visited.has(s)) return 0;
        visited.add(s);
        let t = 0;
        for (let edge of adjacencyList[s]) {
            let t1 = edge[2] + dfs(edge[0], d,visited);
            t += t1;
        }
        return t;
    }
    return result;
};

magicTree(3,[[0,1,5],[1,2,3]]);
        
