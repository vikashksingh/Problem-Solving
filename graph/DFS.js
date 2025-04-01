const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}
// const dfs = [];

// function DFS(graph, key){
//     if (!key) return;
//     dfs.push(key);
//     if (dfs.length == 0) return;
//     dfs.pop();
//     console.log(key);
//     for (var val of graph[key]){
//         dfs.push(val);
//     }
//     DFS(graph,dfs.pop());
// }

// DFS(graph,'a');

// const depthFirstPrint = (graph, sourceNode) => {
//     const stack = [sourceNode];
//     while(stack.length > 0){
//         const current = stack.pop();
//         console.log(current);
//         for (let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// }

const depthFirstPrint = (graph, sourceNode) => {
    console.log(sourceNode);
    for (let neighbor of graph[sourceNode]){
        depthFirstPrint(graph, neighbor);
    }
}

depthFirstPrint(graph, 'a');