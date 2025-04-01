class MaxHeap {
    constructor(){
        this.heap = [];
    }
    add(elem){
        this.heap.push(elem);
        this.upHeap();
    }
    remove(){
        if(!this.heap.length) return;
        let elem = this.heap[0];
        let lastIndex = this.heap.length - 1;
        this.heap[0] = this.heap[lastIndex];
        this.heap.pop();
        this.downHeap();
        return elem;
    }
    upHeap(){
        let currentidx = this.heap.length-1;
        while(currentidx > 0){
            let parentidx = Math.floor((currentidx-1)/2);
            if(this.heap[currentidx] <= this.heap[parentidx]) break;
            let temp = this.heap[currentidx];
            this.heap[currentidx] = this.heap[parentidx];
            this.heap[parentidx] = temp;
            currentidx = parentidx;
        }
    }
    downHeap(){
        let currentidx = 0;
        let leftChild = 2*currentidx+1;
        let lastIndex = this.heap.length-1;
        while(leftChild <= lastIndex){
            let switchidx = leftChild;
            let rightChild = 2*currentidx+2;
            if(rightChild <= lastIndex && this.heap[rightChild] > this.heap[leftChild]){
                switchidx = rightChild;
            }
            if(this.heap[switchidx] <= this.heap[currentidx]) break;
            let temp = this.heap[switchidx];
            this.heap[switchidx] = this.heap[currentidx];
            this.heap[currentidx] = temp;
            currentidx = switchidx;
            leftChild = 2*currentidx+1;
        }
    }
}

const myHeap = new MaxHeap();
myHeap.add(4);
myHeap.add(3);
myHeap.add(2);
myHeap.add(7);
myHeap.add(8);
myHeap.add(1);

console.log(myHeap);
console.log(myHeap.remove());
console.log(myHeap.remove());
console.log(myHeap.remove());
console.log(myHeap.remove());
console.log(myHeap.remove());
console.log(myHeap.remove());
console.log(myHeap.remove());
console.log(myHeap);