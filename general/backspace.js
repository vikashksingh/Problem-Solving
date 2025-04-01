/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // let stck1 = [];
    // let stck2 = [];
    // for (let item of s){
    //     if (item == '#') stck1.pop();
    //     else stck1.push(item);
    // }
    // for (let item of t){
    //     if (item == '#') stck2.pop();
    //     else stck2.push(item);
    // }
    // if(stck1.length == 0 && stck2.length == 0) return true;
    // if(stck1.length == 0 && stck2.length != 0) return false;
    // if(stck1.length != 0 && stck2.length == 0) return false;
    // let i = 0;
    // let j = 0;
    // while (i <= stck1.length-1 && j <= stck2.length-1){
    //     if (stck1[i] != stck2[j]) return false;
    //     i++;
    //     j++;
    // }
    // if (i < stck1.length-1) return false;
    // if (j < stck2.length-1) return false;
    // return true;
    let i = 0, j = 0, k = 0, l = 0;

    while (j < s.length) {
        if (s[j] == '#') {
            if (i >= 2) i -= 2;
            else i = -1;
            j++;
        } else {
            j++;
            if (i == -1) i = j;
            else i++;
        }
    }

    while (l < t.length) {
        if (t[l] == '#') {
            if (k >= 2) k -= 2;
            else k = -1;
            l++;
        } else {
            l++;
            if (k == -1) k = l;
            else k++
        }
    }
    if (i != k) return false;
};

backspaceCompare("xywrrmp","xywrrm#p")
// backspaceCompare("ab#c","ad#c")