/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    function solve(left, right, s) {
        if (s.length == 2*n) {
            result.push(s);
            return;
        }
        if (left < n) {
            solve(left+1, right, s + '(');
        }
        if (right < left) {
            solve (left, right+1, s + ')');
        }
    }
    solve(0, 0 , '');
    return result;
};

generateParenthesis(3);