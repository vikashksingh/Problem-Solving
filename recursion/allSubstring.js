function allSubstringPrint(str, substr=''){
    if (!str) {
        console.log(substr);
        return;
    };
    allSubstringPrint(str.substring(1),substr + str[0]);
    allSubstringPrint(str.substring(1),substr);
}

function allSubstringList(str, substr=''){
    if (!str) {
        return [substr];
    };
    let result;
    let sub1 = allSubstringList(str.substring(1),substr + str[0]);
    let sub2 = allSubstringList(str.substring(1),substr);
    result = [...sub1, ...sub2];
    return result;
}

function allSubstringIterartive(str){
    let result = [];
    while (str.length) {
        var temp = [].concat(result);
        result = [];
        for (let res of temp){
            result.push(res);
            result.push(res + str[0]);
        }
        result.push(str[0]);
        str = str.substring(1);
    }
    return result;
}

console.log(allSubstringIterartive('vikash'));