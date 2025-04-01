class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
        var ci = this.queue.length - 1;
        while (ci > 0) {
            let pi = Math.floor((ci-1)/2);
            if (this.queue[ci] <= this.queue[pi])
                break;
            let temp = this.queue[ci]
            this.queue[ci] = this.queue[pi];
            this.queue[pi]  = temp;
            ci = pi;
        }
    }
    dequeue(){
        let li = this.queue.length - 1;
        let item = this.queue[0];
        this.queue[0] = this.queue[li];
        this.queue.pop();
        --li;
        let i = 0;
        while (true){
            let ci = (2*i) + 1;
            if (ci > li) 
                break;
            
            let rc = ci + 1;

            if (rc <= li && this.queue[rc] > this.queue[ci]){
                ci  = rc;
            }
            
            if (this.queue[i] >= this.queue[ci]) {
                break;
            }
            let temp = this.queue[ci]
            this.queue[ci] = this.queue[i];
            this.queue[i]  = temp;
            i = ci;
        }
        return item;
    }
}


var pq = new PriorityQueue();
pq.enqueue(4);
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(7);
pq.enqueue(8);
pq.enqueue(1);
// pq.enqueue(4);
console.log(pq.queue);
console.log(pq.dequeue());
console.log(pq.queue);
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
