/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stck = [asteroids[0]];
    let psign = asteroids[0] > 0 ? '+' : '-';
    let csign;
    for (let a = 1; a < asteroids.length; a++){
        csign = asteroids[a] > 0 ? '+' : '-';
        if (psign == csign || (psign == '-' && csign == '+')){
            stck.push(asteroids[a]);
            if (psign == '-' && csign == '+') psign = csign;
        } else {
            let cur = Math.abs(asteroids[a]);
            let len = stck.length;
            if (cur == Math.abs(stck[len-1])) {
                stck.pop();
                if (len) psign = stck[len-1] > 0 ? '+' : '-';
            } else if (cur < Math.abs(stck[len-1])) {
                if (len) psign = stck[len-1] > 0 ? '+' : '-';
            } else {
                while (Math.abs(stck[stck.length-1]) < cur && stck.length > 0) {
                    stck.pop();
                }
                if (stck.length){
                    if (Math.abs(stck[stck.length-1]) == cur) stck.push(asteroids[a]);
                    psign = stck[stck.length-1] > 0 ? '+' : '-';
                } 
            }
        }
    }
    return stck;
};

asteroidCollision([-2,-2,1,-2])