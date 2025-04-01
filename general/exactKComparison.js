/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
    // var arr = new Array(n);
    var arrM = [];
    for (var i = 1; i <= m; i++){
        arrM.push(i);
    }
    function algo(array){
        var maximum_value = -1;
        var maximum_index = -1;
        var search_cost = 0;
        var n = array.length;
        for (var i = 0; i < n; i++){
            if(maximum_value < array[i]){
                maximum_value = array[i];
                maximum_index = i;
                search_cost += 1;
            }
        }
        return search_cost;
    }
    function solve(idi,idj,count=0){
        if(idi == arrM.length-1 && idj == arrM.length-1) return count;
        var arr = [];
        var len = n;
        for(var i = idi; i < arrM.length;){
            arr.push(arrM[i]);
            var j = idj;
            while (arr.length <= len-1){
                arr.push(arrM[j]);
                j++;
            }
            if (algo(arr) == k) ++count;
            if(j <= arrM.length-1) return solve(i,j,count);
            else if(i <= arrM.length-1) return solve(++i,0,count);
        }
    }
    var result = solve(0,0);
    if(result == undefined) return 0;
    else return result + 1;
};

console.log(numOfArrays(50,100,25));