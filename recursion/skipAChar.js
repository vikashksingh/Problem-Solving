function skipAChar(str, char) {
  // Base case: if the string is empty, return an empty string
  if (str.length === 0) {
    return '';
  }

  // Check the first character of the string
  if (str[0] === char) {
    // If it matches the character to skip, skip it and recurse on the rest of the string
    return skipAChar(str.slice(1), char);
  } else {
    // If it doesn't match, include it in the result and recurse on the rest of the string
    return str[0] + skipAChar(str.slice(1), char);
  }
}

console.log(skipAChar('baccad', 'a')); // returns 'bccd'