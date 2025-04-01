/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const pq = new PriorityQueue1();
  const arr = [];
  for (let i = 0; i < n; i++) {
    pq.enqueue(nums[i]);
    arr.push(nums[i]);
    let sum = nums[i];
    for (let j = i + 1; j < n; j++) {
      sum += nums[j];
      pq.enqueue(sum);
      arr.push(sum);
    }
  }
  return arr;
  let result = 0;
  let i = 1;
  while (i < left) {
    pq.dequeue();
    i++;
  }
  while (i <= right) {
    result += pq.dequeue();
    i++;
  }
  return result;
};

class PriorityQueue1 {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
    var ci = this.queue.length - 1;
    while (ci > 0) {
      let pi = Math.floor((ci - 1) / 2);
      if (this.queue[ci] >= this.queue[pi]) break;
      let temp = this.queue[ci];
      this.queue[ci] = this.queue[pi];
      this.queue[pi] = temp;
      ci = pi;
    }
  }
  dequeue() {
    let li = this.queue.length - 1;
    let item = this.queue[0];
    this.queue[0] = this.queue[li];
    this.queue.pop();
    --li;
    let i = 0;
    while (true) {
      let ci = 2 * i + 1;
      if (ci > li) break;

      let rc = ci + 1;

      if (rc <= li && this.queue[rc] < this.queue[ci]) {
        ci = rc;
      }

      if (this.queue[i] <= this.queue[ci]) {
        break;
      }
      let temp = this.queue[ci];
      this.queue[ci] = this.queue[i];
      this.queue[i] = temp;
      i = ci;
    }
    return item;
  }
}

rangeSum([1, 2, 3, 4], 4, 1, 5);
