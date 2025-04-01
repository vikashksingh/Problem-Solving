const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}
const breadthFirstPrint = (graph, sourceNode) => {
    const queue = [sourceNode];
    while(queue.length){
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}
breadthFirstPrint(graph,'a');