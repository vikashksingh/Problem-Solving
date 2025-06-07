class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    this.countingSort(nums);
    return nums;
  }

  /**
   * @param {number[]} arr
   * @return {void}
   */
  countingSort(arr) {
    let count = new Map();
    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);

    nums.forEach((val) => {
      if (!count.has(val)) {
        count.set(val, 0);
      }
      count.set(val, count.get(val) + 1);
    });

    let index = 0;
    for (let val = minVal; val <= maxVal; val += 1) {
      while (count.get(val) > 0) {
        nums[index] = val;
        index += 1;
        count.set(val, count.get(val) - 1);
      }
    }
  }
}
