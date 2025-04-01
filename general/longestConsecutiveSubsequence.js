/**
 * @param {number[]} nums
 * @return {number}
 */
class UnionFind{
    constructor(len){
        this.arr = [];
        this.sz = [];
        for(let i = 0; i < len; i++){
            this.arr.push(i);
            this.sz.push(1);
        }
    }

    root(i){
        while(this.arr[i] == i){
          return i; 
        } 
        return this.arr[i] = this.root(this.arr[i]);
    }
    
    connected(a,b){
        return this.root(a) == this.root(b);
    }

    union(a,b){
        let roota = this.root(a);
        let rootb = this.root(b);
        // if (this.sz[a] < this.sz[b]) {
        //     this.arr[roota] = rootb;
        //     this.sz[b] += this.sz[a];
            
        // } else {
        //     this.arr[rootb] = roota;
        //     this.sz[a] += this.sz[b];
        // }

        if (roota != rootb){
            this.arr[roota] = rootb;
            this.sz[b] += this.sz[a];
        }
    }

    getLargestComponentSize(){
        let maxSize = 0;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == i && this.sz[i] > maxSize) {
                maxSize = this.sz[i];
            }
        }
        
        return maxSize;
    }
}
var longestConsecutive = function(nums) {
    const unionFind = new UnionFind(nums.length);
    const numsObj = {};
    for (let num = 0; num < nums.length; num++) {
        let key = nums[num];
        if(nums[num] in numsObj) continue;
        if((key - 1) in numsObj) {
            unionFind.union(num,numsObj[key-1]);
        }
        if((key + 1) in numsObj){
            unionFind.union(num,numsObj[key+1]);
        }
        numsObj[nums[num]] = num;
    }

    return unionFind.getLargestComponentSize();
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));[100,4,200,1,3,2]
// console.log(longestConsecutive([100,4,200,1,3,2]));