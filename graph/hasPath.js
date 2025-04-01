var graph = {
    f: ['g','i'],
    g:['h'],
    i:['k','g'],
    h:[],
    k:[],
    j:['i']
}

const hasPathDFS = (graph, source, destination) => {
    const stack = [source];
    if (source == destination) return true;
    while(stack.length){
        const current = stack.pop();
        if (current == destination) return true;
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
    return false
}

const hasPathBFS = (graph, source, destination) => {
    const queue = [source];
    if (queue == destination) return true;
    while(queue.length){
        const current = queue.shift();
        if (current == destination) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false
}

const hasPathDFSRecursively = (graph, source, destination) => {
    if(source == destination) return true;
    for(let neighbor of graph[source]){
        if(hasPathDFSRecursively(graph, neighbor, destination)) {
            return true;
        }
    }
    return false;
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

console.log(hasPathDFSPrint(graph,'j','h'));
