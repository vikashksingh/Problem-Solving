// * * * * *
// * * * * 
// * * *
// * *
// *

// function printPattern(r){
//     if (r == 0) return;

//     let pattern = '';
//     for (let c = 1; c <= r; c++){
//         pattern += ' *';
//     }
//     console.log(pattern);
//     printPattern(--r);
// }
// printPattern(5);

// Same recursive approach can be applied to do sorting

// function bubbleSort(arr, r, c){
//     if (r == 0) return;
    
//     if (c < r) {
//         if (arr[c] > arr[c+1]) {
//             let temp = arr[c];
//             arr[c] = arr[c+1];
//             arr[c+1] = temp;
//         }
//         bubbleSort(arr,r,c+1);
//     } else {
//         bubbleSort(arr,r-1,0);
//     }
// }
// let arr = [7,4,9,3];
// bubbleSort(arr, 4, 0);
// console.log(arr);

function selectionSort(arr, r, c,max = 0){
    if (r == 0) return;

    if (c < r) {
        if (arr[c] > arr[max]) {
            selectionSort(arr,r,c+1,c);
        } else {
            selectionSort(arr,r,c+1,max);
        }
    } else {
        [arr[r-1],arr[max]] = [arr[max], arr[r-1]];
        selectionSort(arr,r-1,0);
    }
}
let arr = [7,4,9,3,1,6];
selectionSort(arr, 6, 0);
console.log(arr);
