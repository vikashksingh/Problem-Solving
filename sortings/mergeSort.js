// class Solution {
//   /**
//    * @param {number[]} nums
//    * @return {number[]}
//    */
//   sortArray(nums) {
//       return this.mergeSort(0, nums.length-1, nums);
//   }
//   mergeSort(start, end, nums){
//       if(start === end) return [nums[start]];
//       const mid = Math.floor((start + end) / 2);
//       const left = this.mergeSort(start, mid, nums);
//       const right = this.mergeSort(mid+1, end, nums);
//       return this.merge(left, right);
//   }
//   merge(arr1, arr2){
//       let i = 0;
//       let j = 0;
//       const res = [];
//       while(i < arr1.length && j < arr2.length){
//           if(arr1[i] < arr2[j]){
//               res.push(arr1[i]);
//               i++;
//           } else {
//               res.push(arr2[j]);
//               j++
//           }
//       }
//       while(i < arr1.length){
//           res.push(arr1[i]);
//           i++;
//       }
//       while(j < arr2.length){
//           res.push(arr2[j]);
//           j++;
//       }
//       return res;
//   }
// }

// ************************ NeetCode Way **********************

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    this.mergeSort(nums, 0, nums.length - 1);
    return nums;
  }

  /**
   * @param {number[]} arr
   * @param {number} l
   * @param {number} r
   * @return {void}
   */
  mergeSort(arr, l, r) {
    if (l >= r) return;
    let m = Math.floor((l + r) / 2);
    this.mergeSort(arr, l, m);
    this.mergeSort(arr, m + 1, r);
    this.merge(arr, l, m, r);
  }

  /**
   * @param {number[]} arr
   * @param {number} l
   * @param {number} m
   * @param {number} r
   * @return {void}
   */
  merge(arr, l, m, r) {
    let temp = [];
    let i = l,
      j = m + 1;

    while (i <= m && j <= r) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }

    while (i <= m) temp.push(arr[i++]);
    while (j <= r) temp.push(arr[j++]);

    for (let i = l; i <= r; i++) {
      arr[i] = temp[i - l];
    }
  }
}
