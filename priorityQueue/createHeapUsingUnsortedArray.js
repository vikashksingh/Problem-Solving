function createMaxHeap(arr) {
  let n = Math.floor(arr.length / 2) - 1;
  for (let i = n; i >= 0; i--) {
    let currentidx = i;
    let leftChild = 2 * currentidx + 1;
    let lastIndex = arr.length - 1;
    while (leftChild <= lastIndex) {
      let switchidx = leftChild;
      let rightChild = 2 * currentidx + 2;
      if (rightChild <= lastIndex && arr[rightChild] > arr[leftChild]) {
        switchidx = rightChild;
      }
      if (arr[switchidx] <= arr[currentidx]) break;
      let temp = arr[switchidx];
      arr[switchidx] = arr[currentidx];
      arr[currentidx] = temp;
      currentidx = switchidx;
      leftChild = 2 * currentidx + 1;
    }
  }
  return arr;
}

console.log(createMaxHeap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]));
