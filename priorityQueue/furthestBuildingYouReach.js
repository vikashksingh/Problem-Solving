/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    // function solve(index,bricks,ladders){
    //     if(bricks <= 0 && ladders <= 0) return index;
    //     if(index >= heights.length-1) return index;
    //     while(heights[index] > heights[index+1]){
    //         index++;
    //     }
    //     let useBricks = bricks > 0 && solve(index+1,(bricks - (heights[index+1] - heights[index])),ladders);
    //     let useLadders = ladders > 0 && solve(index+1,bricks,ladders-1);
    //     return Math.max(useBricks, useLadders);
    // }

    // return solve(0,bricks,ladders) - 1;
    // const totalJumps = 0;
    // for(let i = 1; i < heights.length; i++){
    //     if(heights[i] > heights[i-1]){
    //         totalJumps += (heights[i] - heights[i-1]);
    //     }
    // }
    const pq = new PriorityQueue();
    let i = 0;
    let tempLadders = ladders
    while((tempLadders || bricks) && i < heights.length){
        if(heights[i+1] > heights[i] && tempLadders) {
            tempLadders -= 1;
            pq.enqueue(heights[i+1] - heights[i]);
        } else if(heights[i+1] > heights[i]) {
            let height = heights[i+1] - heights[i];
            let max = pq.peek();
            if(max && height > max && bricks > max) {
                if(ladders && tempLadders <= ladders){
                    pq.dequeue(max);
                    tempLadders++
                    if(bricks) bricks -= max;
                }
            } else {
                bricks -= (heights[i+1] - heights[i]);
            }
        }
        i++;
    }
    return i;
};

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    peek(){
        return this.queue[0];
    }
    enqueue(item) {
        this.queue.push(item);
        var ci = this.queue.length - 1;
        while (ci > 0) {
            let pi = Math.floor((ci-1)/2);
            if (this.queue[ci] >= this.queue[pi])
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
            
            let rc = ci +1;

            if (rc <= li && this.queue[rc] < this.queue[ci]){
                ci  = rc;
            }
            
            if (this.queue[i] <= this.queue[ci]) {
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

furthestBuilding([4,2,7,6,9,14,12],5,1);