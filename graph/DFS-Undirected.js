const edges = [
    ['i','j'],['k','i'],['m','k'],['k','l'],['o','n']
];

function createAdjacencyList() {
    const adjacencyList = {};

    for (let edge of edges){
        const [a,b] = edge;
        if (!(a in adjacencyList)) adjacencyList[a] = [];
        if (!(b in adjacencyList)) adjacencyList[b] = [];
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }
    return adjacencyList;
}

function hasPath(graph, source, destination, visited){
    if(source == destination) return true;
    if (visited.has(source)) return false;
    visited.add(source);
    for (let node of graph[source]){
        if(hasPath(graph, node, destination, visited)){
            return true;
        }
    }
    return false;
}

function findUndirectedPath(){
    const graph = createAdjacencyList();
    return hasPath(graph, 'i', 'o', new Set());
}

console.log(findUndirectedPath());
