function allConstruct(target, wordBank){
    if (target == '') return [];
    var allResult = null;
    for (var word of wordBank){
        if (target.indexOf(word) == 0){
            var newTarget = target.slice(word.length);
            var res = allConstruct(newTarget,wordBank);
            if (res != null){
                if (allResult == null){
                    allResult = [[word,...res]];
                } else {
                    allResult.push([word,...res])
                }     
            } 
        } 
    }
    return allResult;
}
console.log(allConstruct('purple', ['purp','p','ur','le','purpl']))
console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd']));
console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd','ef','c']));