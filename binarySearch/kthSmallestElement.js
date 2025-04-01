function kthSmallestElement(arr, start, end, left, right, k) {
  let mid = start + Math.floor((end - start) / 2);
  let count = 0,
    possAns = -1;
  for (let i = left; i <= right; i++) {
    if (arr[i] <= mid) {
      count++;
      if (possAns == -1) {
        possAns = arr[i];
      } else {
        possAns = Math.max(possAns, arr[i]);
      }
    }
  }
  if (count == k) {
    return possAns;
  } else if (count < k) {
    possAns = kthSmallestElement(arr, mid + 1, end, left, right, k);
  } else {
    possAns = kthSmallestElement(arr, start, mid - 1, left, right, k);
  }
  return possAns;
}

console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 1, 100, 0, 5, 3));
