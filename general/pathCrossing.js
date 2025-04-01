/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const set = {};
    let x = 0;
    let y = 0;
    set[[x,y]] = [x,y];
    for(let p of path){
        switch(p) {
            case 'N':
                y += 1;
                break;
            case 'E':
                x += 1;
                break;
            case 'S':
                y -= 1;
                break;
            case 'W':
                x -= 1;
                break;
        }
        let point = [x,y];
        if(point in set) return true;
        set[point] = point;
    }
    return false;
};

// isPathCrossing('ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS');
isPathCrossing('NES');