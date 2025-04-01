function isvalidAnagram(str1, str2){
    let str1Freq = {}, str2Freq = {};
    if (str1.length != str2.length) return false;
    for (let c of str1) {
        if (c in str1Freq) {
            ++str1Freq[c];
        } else {
            str1Freq[c] = 1;
        }
    }
    for (let c of str2) {
        if (c in str2Freq) {
            ++str2Freq[c];
        } else {
            str2Freq[c] = 1;
        }
    }
    
    let keys = Object.keys(str1Freq);
    for (let key of keys){
        if(str1Freq[key] != str2Freq[key]) return false;
    }
    return true;
}

console.log(isvalidAnagram('madam', 'adamn'));