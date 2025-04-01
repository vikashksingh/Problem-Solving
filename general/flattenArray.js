// [[],[1, [2,3]],[],[3]]
var nestedList = [[1,[[[4],3]]]]; 

// function flatten(arr,res=[]){
//     if (!Array.isArray(arr)) {
//         res.push(arr);
//         return res;
//     }
//     if (arr.length == 0) return res;
//     for (let item of arr){
//         flatten(item,res);
//     }
//     return res;
// }

var NestedIterator = function(nestedList) {
    this.flattened = flatten(nestedList);
    this.index = 0;
};

function flatten(arr,res=[]){
    if (!Array.isArray(arr)) {
        res.push(arr);
        return res;
    }
    if (arr.length == 0) return res;
    for (let item of arr){
        flatten(item,res);
    }
    return res;
}


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.index < this.flattened.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.flattened[this.index++];
};

// console.log(flatten(list));

var i = new NestedIterator(nestedList), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a);