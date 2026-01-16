// selection short

// function sort(arr) {
//     for(i=0; i<=arr.length-2; i++) {
//     let min = i
//     for(j=i;j<=arr.length-1; j++){
//         if(arr[j] < arr[min]) min = j;
//     }
//     let temp = arr[min];
//       arr[min]=arr[i];
//       arr[i]=temp

// }

// return arr

// }

// console.log(sort([13,46,24,52,20,9]))


// Bubble sort

//   function Bubble_sort(arr) {
//         for(i=arr.length-1; i>=1; i--) {
//             for(j=0; j<=i-1; j++) {
//                 if(arr[j]>arr[j+1]) {
//                     let temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                 }
//             }
//         }
//         return arr
//     }

//     console.log(Bubble_sort([13,46,24,52,20,9]))

// insertion sort

function Insertion_sort(arr) {
    for (let i = 0; i <= arr.length-1; i++) {
        let j = i;
      while (j>0 && arr[j-1]>arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        j--
    }
    }
    return arr
}

// console.log(Insertion_sort([ 9, 13, 20, 24, 46, 52 ]))
console.log(Insertion_sort([13,46,24,52,20,9]))