function countConstruct(target, wordBank){
    if (target == '') return 1;
    var result = 0
    for (var word of wordBank){
        if (target.indexOf(word) == 0){
            var newTarget = target.slice(word.length);
            var res = countConstruct(newTarget,wordBank,result);
            result += res; 
        }
        
    }
    return result;
}

console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd']))
console.log(countConstruct('purple', ['purp','p','ur','le','purpl']))