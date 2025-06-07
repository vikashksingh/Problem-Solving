class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    const negatives = nums.filter((num) => num < 0).map((num) => -num);
    const positives = nums.filter((num) => num >= 0);

    if (negatives.length > 0) {
      this.radixSort(negatives);
      negatives.reverse();
      for (let i = 0; i < negatives.length; i++) {
        negatives[i] = -negatives[i];
      }
    }

    if (positives.length > 0) {
      this.radixSort(positives);
    }

    return [...negatives, ...positives];
  }

  /**
   * @param {number[]} arr
   * @return {void}
   */
  radixSort(arr) {
    const maxElement = Math.max(...arr);
    let d = 1;

    while (Math.floor(maxElement / d) > 0) {
      this.countSort(arr, d);
      d *= 10;
    }
  }

  /**
   * @param {number[]} arr
   * @param {number} d
   * @return {void}
   */
  countSort(arr, d) {
    const count = Array(10).fill(0);
    for (const num of arr) {
      count[Math.floor(num / d) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    const res = Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
      const idx = Math.floor(arr[i] / d) % 10;
      res[count[idx] - 1] = arr[i];
      count[idx]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = res[i];
    }
  }
}
