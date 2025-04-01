/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    var countA = 0, countB = 0;
    for (var i = 1; i < colors.length - 1; i++){
        if(colors[i-1] == colors[i] && colors[i] == colors[i+1]){
            if(colors[i] == 'A'){
                countA++;
            } else {
                countB++
            }
        }
    }
    return countA - countB >= 1;
};

winnerOfGame('ABBBBBBBAAA');