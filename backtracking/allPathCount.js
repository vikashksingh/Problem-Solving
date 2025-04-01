function allPathCount(r, c) {
  if (r == 2 || c == 2) {
    return 1;
  }
  let left = allPathCount(r + 1, c);
  let right = allPathCount(r, c + 1);
  return left + right;
}

function allPathPrint(r, c, path) {
  if (r == 2 && c == 2) {
    console.log(path);
  }
  if (r < 2) {
    allPathPrint(r + 1, c, path + "D");
  }
  if (c < 2) {
    allPathPrint(r, c + 1, path + "R");
  }
}

console.log(allPathPrint(0, 0, ""));
