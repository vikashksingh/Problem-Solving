var maxDepth = function(root) {
    function solve(node,count = 0){
        if (node <= 1) return ++count;
        if (root[node] == null) return 0;
        count++;
        return solve(parent(node),count);
    }
    function parent(node){
        return Math.floor((node-1)/2);
    }
    // function left(node){
    //     return 2*node + 1;
    // }
    // function right(node){
    //     return 2*node + 2;
    // }
    return solve(root.length-1);
};

console.log(maxDepth([3,9,20,null,null,15,7]));