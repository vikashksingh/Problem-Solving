class HashFunction{
    constructor(size){
        this.arr = new Array(size);
    }
    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.arr.length;
        }
        return hash;
    }
    set(key,val) {
        let hash = this._hash(key);
        if (!this.arr[hash]) {
            this.arr[hash] = [];
        }
        this.arr[hash].push([key,val]);
    }
    get(key) {
        let hash = this._hash(key);
        if(this.arr[hash]) {
            for (let i = 0; i < this.arr[hash].length; i++){
                if (this.arr[hash][i][0] == key) return this.arr[hash][i][1];
            }
        }
        return undefined;
    }
}

const myHashTable = new HashFunction(2);
myHashTable.set('grapes',10000);
myHashTable.set('apples',54);
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));