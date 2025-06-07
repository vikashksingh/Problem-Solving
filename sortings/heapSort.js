class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    this.heapSort(nums);
    return nums;
  }

  /**
   * @param {number[]} arr
   * @param {number} n
   * @param {number} i
   * @return {void}
   */
  heapify(arr, n, i) {
    let l = (i << 1) + 1;
    let r = (i << 1) + 2;
    let largestNode = i;

    if (l < n && arr[l] > arr[largestNode]) {
      largestNode = l;
    }

    if (r < n && arr[r] > arr[largestNode]) {
      largestNode = r;
    }

    if (largestNode !== i) {
      [arr[i], arr[largestNode]] = [arr[largestNode], arr[i]];
      this.heapify(arr, n, largestNode);
    }
  }

  /**
   * @param {number[]} arr
   * @return {void}
   */
  heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapify(arr, i, 0);
    }
  }
}
