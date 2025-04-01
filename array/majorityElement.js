function findMajorityElement(a, size) {
  let mid = Math.floor(size / 2);
  let start = a[0];
  let middle = a[mid];
  let end = a[size - 1];
  const arr = [0, 0, 0];
  for (let i = 0; i < size; i++) {
    if (a[i] == start) arr[0]++;
    else if (a[i] == middle) arr[1]++;
    else arr[2]++;
  }
  if (arr[0] > mid) return start;
  if (arr[1] > mid) return middle;
  if (arr[2] > mid) return end;
  return -1;
}
findMajorityElement(
  [6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 13],
  18
);
