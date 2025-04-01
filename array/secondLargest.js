function secondLargest(arr) {
  let largest = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      index = i;
    }
  }
  arr[index] = 0;
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  largest != secondLargest ? secondLargest : -1;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1]));
