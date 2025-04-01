/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const len = gas.length;
    for(let i = 0; i < gas.length; i++){
        if(gas[i] >= cost[i]){
            let tempi = i;
            let count = 0;
            let tank = gas[i];
            while(count <= len && tank >= cost[tempi]){
                tank = tank - cost[tempi] + gas[(tempi+1)%len];
                tempi++;
                tempi %= len;
                count++;
            }
            if(count >= len) return i;
        }
    }
    return -1;
};

canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])