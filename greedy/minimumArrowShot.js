/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let counter = 1;
    let i = 1;
    while(i < points.length){
        let prev = points[i-1][1];
        // let flag = true;
        while(i < points.length && prev >= points[i][0] && prev <= points[i][1]){
            i++;
            // flag = false;
        }
        // if(flag) 
        counter++;
        i++;
    }
    return counter;
};

findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])