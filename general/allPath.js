var allPathsSourceTarget = function(graph) {
    var end = graph.length-1;
    var result = [];
    var adjacencyList = {};

    for(var i = 0; i < graph.length; i++){
        adjacencyList[i] = graph[i];
    }
    const hasPathDFSPrint = (graph, source, destination) => {
        if(source == destination) return [];
        for(let neighbor of graph[source]){
            var node = hasPathDFSPrint(graph, neighbor, destination);
            if (node != null){
                return [neighbor, ...node];
            }
        }
        return null;
    }
    for (let source1 of adjacencyList[0]){
        for (let source2 of adjacencyList[source1]) {
            result.push([0, source2, ...hasPathDFSPrint(adjacencyList,source2,end)])
        }
        result.push([0, source1, ...hasPathDFSPrint(adjacencyList,source1,end)])
    }
    return result;
};
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));