/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s2Map = {};
  const s1Map = {};
  for (let i = 0; i < s1.length; i++) {
    if (!(s1[i] in s1Map)) {
      s1Map[s1[i]] = 1;
    } else {
      s1Map[s1[i]]++;
    }
  }
  const keys = Object.keys(s1Map);
  for (let i = 0; i < s1.length; i++) {
    if (!(s2[i] in s2Map)) {
      s2Map[s2[i]] = 1;
    } else {
      s2Map[s2[i]]++;
    }
  }
  let i = 0;
  let j = s1.length - 1;
  while (j < s2.length) {
    if (!testInclusion(s1Map, s2Map)) {
      s2Map[s2[i]]--;
      if (s2Map[s2[i]] == 0) {
        delete s2Map[s2[i]];
      }
      i++;
      j++;
      if (!(s2[j] in s2Map)) {
        s2Map[s2[j]] = 1;
      } else {
        s2Map[s2[j]]++;
      }
    } else {
      return true;
    }
  }

  function testInclusion(obj1, obj2) {
    const keys = Object.keys(obj1);
    for (let key of keys) {
      if (obj1[key] != obj2[key]) return false;
    }
    return true;
  }
  return false;
};

checkInclusion("ab", "eidbaooo");
