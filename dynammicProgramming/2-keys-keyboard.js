/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n == 1) return 0;
  if (n == 2) return 2;

  function helper(processed, copy, steps) {
    if (n == steps) {
      if (processed.length == n) return 0;
      else return Number.MAX_SAFE_INTEGER;
    }
    let newcopy = helper(processed, processed, steps + 1);
    let paste = helper(processed + copy, copy, steps + 1);
    return 1 + Math.min(newcopy, paste);
  }
  return 2 + helper("AA", "A", 2);
};

minSteps(4);
