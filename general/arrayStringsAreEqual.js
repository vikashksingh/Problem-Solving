/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // return word1.join('') == word2.join('');
    let i = 0, j = 0, ii = 0, jj = 0;
    while (i < word1.length || j < word2.length) {
        if(word1[i][ii] != word2[j][jj]) return false;
        if (ii < word1[i].length-1) {
            ii++;
        } else if (ii == word1[i].length-1) {
            ii = 0;
            i++;
        }
        if (jj < word2[j].length-1) {
            jj++;
        } else if (jj == word2[j].length-1) {
            jj = 0;
            j++;
        }
    }
    if (i == word1.length && j == word2.length) return true;
    else return false;
    // return false;
};

arrayStringsAreEqual(["ab", "c"],["a", "bc"])