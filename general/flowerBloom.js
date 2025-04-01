/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    var bloomObj = {};
    var output = [];
    for (var flower of flowers){
        for (var i = flower[0]; i <= flower[1];i++){
            if (i in bloomObj) {
                ++bloomObj[i];
            } else {
                bloomObj[i] = 1;
            }
        }
    }
    for (var p of people){
        output.push(bloomObj[p]);
    }
    return output;
};

console.log(fullBloomFlowers([[1,6],[3,7],[9,12],[4,13]],[2,3,7,11]));