var getRow = function(rowIndex) {
    function solve(index){
        if (index <= 0) return [1];
        var res = solve(index-1);
        var arr = [];
        arr.push(1);
        var i = 0;
        var j = 1;
        while (j < res.length) {
            arr.push(res[i]+res[j]);
            i++
            j++;
        }
        arr.push(1);
        return arr;
    }
    return solve(rowIndex)
};

console.log(getRow(4));