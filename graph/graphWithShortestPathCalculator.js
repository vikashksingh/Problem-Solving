/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.graph = {};
    for (let edge of edges) {
        let from = edge[0];
        let to = edge[1];
        let cost = edge[2];
        let toCost = [to,cost];
        if (!(from in this.graph)) {
            this.graph[from] = [];
            
        }
        this.graph[from].push(toCost);
    }
};

Graph.prototype.shortestPath = function(node1, node2) {
    if (node1 == node2) return 0;
    if (!(node1 in this.graph)) return -1;
    let final = 0;
    let newNode = node1;
    while (newNode in this.graph && newNode != node2) {
        if (this.graph[newNode].length > 1){
            this.graph[newNode].sort((a,b) => a[1] - b[1]);
        }
        final += this.graph[newNode][0][1];
        newNode = this.graph[newNode][0][0];
    }
    return final;
};

let graph = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]);
graph.shortestPath(3,2);
