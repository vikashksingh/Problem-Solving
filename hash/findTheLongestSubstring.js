/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  const vowelsMap = {};
  const vowels = ["a", "e", "i", "o", "u"];
  for (let c of s) {
    if (vowels.indexOf(c) !== -1) {
      if (c in vowelsMap) vowelsMap[c]++;
      else vowelsMap[c] = 1;
    }
  }
  function validate() {
    const values = Object.values(vowelsMap);
    for (let val of values) {
      if (val % 2) return false;
    }
    return true;
  }
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (validate()) {
      return j - i + 1;
    }
    if (vowels.indexOf(s[i]) != -1) {
      vowelsMap[s[i]]--;
      i++;
    } else {
      vowelsMap[s[j]]--;
      j--;
    }
  }
};

findTheLongestSubstring("eleetminicoworoep");
