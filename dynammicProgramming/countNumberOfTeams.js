/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let count = 0;
  const len = rating.length;
  function solve(idx) {
    if (idx >= len) return [];
    let local = [];
    for (let i = idx; i < len; i++) {
      local.push(...local, [rating[i], ...solve(i + 1)]);
    }
    return local.filter(item => {
      if (item.length < 3) return item;
      else {
        if (item[0] < item[1] < item[2] || item[0] > item[1] > item[2]) count++;
      }
    });
  }

  solve(0);
  return count;
};

numTeams([2, 5, 3, 4, 1]);
