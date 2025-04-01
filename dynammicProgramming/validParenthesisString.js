/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    // let bracket = 0;
    // let i = 0;
    // while(i < s.length){
    //     if(bracket && s[i] == ')') bracket--;
    //     if(s[i] == '(') bracket++;
    //     if(bracket && s[i] == '*') bracket--;
    //     i++;
    // }
    // return bracket <= 0;
    function solve(i, wildcard){
        if(wildcard == 1) return ['('];
        if(wildcard == 2) return [')'];
        if(wildcard == 3) return [''];
        if(i >= s.length) return [];
        let result = [];
        if(i < s.length){
            if(s[i] == '*'){
                let wildcard = 0;
                result = [...result, ...solve(i,wildcard+1)];
            } else {
                result = [...result, ...s[i]];
            }
        }
        return [...result, solve(i+1)];
    }
    let result = solve(0);
    return result;
};

checkValidString('(*)');