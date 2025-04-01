/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  const frequency = {};
  for (let w of word) {
    if (w in frequency) {
      frequency[w]++;
    } else {
      frequency[w] = 1;
    }
  }
  const values = Object.values(frequency).sort((a, b) => b - a);
  let base = 1;
  let i = 0;
  let total = 0;
  while (i < values.length) {
    if (i > 7 && i <= 15) {
      base = 2;
    } else if (i > 15 && i <= 23) {
      base = 3;
    } else if (i > 23) {
      base = 4;
    }
    total += values[i] * base;
    i++;
  }
  return total;
};

minimumPushes("aabbccddeeffgghhiiiiii");
