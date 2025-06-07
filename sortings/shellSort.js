class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    const n = nums.length;
    if (n === 1) return nums;

    const shellSort = () => {
      let gap = Math.floor(n / 2);
      while (gap >= 1) {
        for (let i = gap; i < n; i++) {
          let key = nums[i];
          let j = i - gap;
          while (j >= 0 && nums[j] > key) {
            nums[j + gap] = nums[j];
            j -= gap;
          }
          nums[j + gap] = key;
        }
        gap = Math.floor(gap / 2);
      }
    };

    shellSort();
    return nums;
  }
}
