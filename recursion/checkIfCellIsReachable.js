var isReachableAtTime = function(sx, sy, fx, fy, t) {
    // let xdis = fx - sx;
    // let ydis = fy - sy;
    // let dis = Math.floor(Math.sqrt((xdis*xdis) + (ydis*ydis)));
    // // if (t == dis || t == dis+1) return true;
    // // else return false;
    // return t == dis;
    function solve(x,y){
        let count = 0;
        if (x > fx || y > fy || x < sx || y < sy || count > t) return 0;
        if (x == fx && y == fy && count == t) return count;
        let hor = 1 + solve(x+1,y);
        let ver = 1 + solve(x,y+1);
        let dia = 1 + solve(x+1,y+1);
        count = hor + ver + dia;
        return  count;
    }
    if (solve(sx,sy)) return true;
    return false;
};

isReachableAtTime(2,4,7,7,6)