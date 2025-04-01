/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    var count = 0;
    var vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    };
    var j = k-1;
    while (j >= 0){
        if(s[j] in vowels) count++;
        j--;
    }
    var max = count;
    for (var i = 1, l = k; i <= s.length - k && l < s.length; i++, l++){
        if (s[i-1] in vowels) count--;
        if (s[l] in vowels) count++;
        if (count > max) max = count;
    }
    return max;
};

maxVowels("abciiidef",3)