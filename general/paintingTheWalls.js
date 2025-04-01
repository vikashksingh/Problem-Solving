/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    const cost_time = [];
    for (let i = 0; i < cost.length; i++){
        cost_time.push([cost[i],time[i]]);
    }
    cost_time.sort((a,b) => a[0] - b[0]);
    let totalCost = 0;
    for (let i = 0; i < cost_time.length;){
        totalCost += cost_time[i][0];
        i += cost_time[i][1];
    }
    return totalCost;
};

paintWalls([1,2,3,2], [1,2,3,2])