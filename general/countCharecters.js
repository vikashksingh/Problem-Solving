/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charsObj = {};
    let count = 0;
    for (let c of chars){
        if(c in charsObj){
            ++charsObj[c];
        } else {
            charsObj[c] = 1;
        }
    }
    for (let word of words) {
        let flag = true;
        for (let c of word){
            if (!(c in charsObj)) flag = false;
        }
        if(flag){
            for (let c of word){
                --charsObj[c];
                count++;
                if(charsObj[c] == 0) delete charsObj[c];
            }
        }
    }
    return count;
};

countCharacters(["cat","bt","hat","tree"],"atach");