function cycleSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      [arr[i], arr[correct]] = [arr[correct], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
}

console.log(cycleSort([9, 3, 7]));
