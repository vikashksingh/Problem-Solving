/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let mondays = Math.floor(n/7);
    let rem = n % 7;
    let total = 0;
    let carry = 0;
    while(mondays) {
        let num = 7 + carry;
        let saving = ((num *(num+1)) / 2) - ((carry*(carry+1))/2);
        total += saving;
        mondays--;
        carry++;
    }
    let begin = carry + 1;
    while(rem){
        total += begin;
        begin = begin+1;
        rem--;
    }
    return total;
};

totalMoney(26);