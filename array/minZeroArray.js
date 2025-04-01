/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  let zeros = nums.reduce((acc, cur) => (cur) ? acc : acc+1, 0);
  let k = 0;
  let i = 0;
  while(i < queries.length){
      let [start, end, val] = queries[i++];
      for(let j = start; j <= end; j++){
          if(nums[j] >= val){
              nums[j] -= val
              if(nums[j] == 0) k++;
          }
      }
      if((zeros+k) === nums.length) return k;
  }
  return -1;
};

minZeroArray([2], [[0,0,3],[0,0,3],[0,0,4],[0,0,1],[0,0,2],[0,0,5],[0,0,4],[0,0,5]])