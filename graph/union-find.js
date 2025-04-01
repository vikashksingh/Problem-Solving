class UnionFind{
    constructor(size) {
        this.root = [];
        this.rank = [];
        for (let i = 0; i < size; i++){
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }

    find(x) {
        if (x == this.root[x]) return x;
        return this.root[x] = this.find(this.root[x]);
    }

    union(x,y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX != rootY) {
            if (this.rank[x] < this.rank[y]) {
                this.root[rootX] = rootY;
            } else if (this.rank[x] > this.rank[y]) {
                this.root[rootY] = rootX;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }

    connected(x,y) {
        return this.find(x) == this.find(y);
    }
}

const uf = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf.connected(4, 9)); // true