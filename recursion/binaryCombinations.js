let len = 3;
function solve(str = ''){
    if (str.length == len) return [str];
    let left = solve(str + '0');
    let right = solve(str + '1');
    return [...left,...right];
}

console.log(solve())