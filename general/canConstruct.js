function canConstruct(target, wordBank){
    if (target == '') return true;
    for (var word of wordBank){
        if (target.indexOf(word) == 0){
            var newTarget = target.substring(word.length);
            if(canConstruct(newTarget,wordBank)){
                return true;
            }
        }
        
    }
    return false;
}

console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd']))