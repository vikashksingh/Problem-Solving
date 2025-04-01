/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winners = {};
    const loosers = {};
    for (let match of matches){
        let winner = match[0];
        let looser = match[1];
        winners[winner] = 1;
        if (looser in loosers){
            loosers[looser]++;
        } else {
            loosers[looser] = 1;
        }
    }
    let ans1 = [];
    for (let key of Object.keys(loosers)){
        if(loosers[key] == 1) ans1.push(key);
    }
    let ans2 = [];
    for (let key of Object.keys(winners)){
        if(!key in loosers) ans2.push(key);
    }
    return[ans2,ans1];
};

findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])