/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    k = k + 1;
    const sourceDestList = {};
    const sources = new Set();
    for(let flight of flights){
        let [source, destination, price] = flight;
        if(!(source in sourceDestList)){
            sourceDestList[source] = [];
        }
        sourceDestList[source].push([destination,price]);
        sources.add(source);
    }
    function solve(src, dst, k){
        if(k < 0) return Number.MAX_SAFE_INTEGER;
        if(src == dst) return 0;
        if(!(sources.has(src))) return Number.MAX_SAFE_INTEGER;
        let visited = new Set();
        let result = [];
        for(let i = 0; i < sourceDestList[src].length; i++){
            let current;
            if(visited.has(src)) current = Number.MAX_SAFE_INTEGER;
            current = sourceDestList[src][i][1] + solve(sourceDestList[src][i][0],dst,k-1,visited);
            visited.add(src);
            result.push(current);
        }
        return Math.min(...result);
    }
    const result = solve(src,dst,k);
    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
};

console.log(findCheapestPrice(10,[[3,4,4],[2,5,6],[4,7,10],[9,6,5],[7,4,4],[6,2,10],[6,8,6],[7,9,4],[1,5,4],[1,0,4],[9,7,3],[7,0,5],[6,5,8],[1,7,6],[4,0,9],[5,9,1],[8,7,3],[1,2,6],[4,1,5],[5,2,4],[1,9,1],[7,8,10],[0,4,2],[7,2,8]],6,0,7));
// console.log(findCheapestPrice(4,[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1));