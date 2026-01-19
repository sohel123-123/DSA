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

// function Insertion_sort(arr) {
//     for (let i = 0; i <= arr.length-1; i++) {
//         let j = i;
//       while (j>0 && arr[j-1]>arr[j]) {
//         let temp = arr[j-1];
//         arr[j-1] = arr[j];
//         arr[j] = temp;
//         j--
//     }
//     }
//     return arr
// }

// // console.log(Insertion_sort([ 9, 13, 20, 24, 46, 52 ]))
// console.log(Insertion_sort([13,46,24,52,20,9]))


// function merge_sort(arr,low,high) {
//     if(low >=high)return;
//     const mid = Math.floor((low + high)/2)

//     merge_sort(arr,low,mid)
//     merge_sort(arr,mid+1,high)
//     return merge(arr,low,mid,high)

// }

// //merge two halves
// function merge(arr,low,mid,high) {
//     high=Math.floor(high)
//       let temp = [];
//       let left = low;
//       let right = mid + 1;

//       //Merge both halves
//       while(left <= mid && right <= high)
//       {
//           if(arr[left] <= arr[right]) { 
//                temp.push(arr[left])
//                left++;
//           } else {
//                temp.push(arr[right])
//                right++;
//           }
//       }

//       //Add remaining left element
//       while(left <= mid) {
//           temp.push(arr[left]);
//           left++;
//       }
//       //Add remaining right element
//       while(right <= high) {
//           temp.push(arr[right]);
//           right++;
//       }
//       //Copy temp back to original array
//       for(let i = low; i<=high; i++ ) {
//           arr[i] = temp[i-low]
//       }
//       return arr
// }
// let arr = [3,1,2,4,1,5,6,2,4]
// console.log(merge_sort(arr,0,arr.length-1));


//Quick sort

function qs(arr,low,high) {
    if (low<high) {
        let parIndex = parIndeX(arr,low,high)
        console.log(parIndex,"parindex")
        qs(arr,low,parIndex-1)
        qs(arr,parIndex+1,high)
    }
    return arr
}

function parIndeX(arr,low,high) {
    let pivot = arr[low]
    let i = low;
    let j = arr.length;

    while (i<j) {
        
    while (arr[i] <= pivot && i <= high-1) {
        i++;
    }

    while (arr[j] > pivot && arr[j] >= low + 1) {
        j--;
    }
    if (i<j) {
        let temp= arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    }
    let Temp = arr[low];
    arr[low] = arr[j];
    arr[j] = Temp;
console.log(arr[j])
    return j
}

let arr = [3,1,2,4,1,5,6,2,4]
console.log(qs(arr,0,arr.length))