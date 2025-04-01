/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const sObj = {};
    for(let c of s){
        if(!(c in sObj)){
            sObj[c] = '';
        }
        sObj[c] += c;
    }
    let result = '';
    for(let c of order){
        if(c in sObj){
            result += sObj[c];
            delete sObj[c];
        }
    }
    const keys = Object.keys(sObj);
   for(let i = 0; i < keys; i++){
       result += sObj[keys[i]];
   }
   return result;
};

customSortString("cba","abcd" )