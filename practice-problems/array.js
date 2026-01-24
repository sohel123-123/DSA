// largest elemnt in an arry
// let arr = [3,2,1,8,2];


// bruete
// function sort(arr) {
//     let left = arr[0];
//     let right = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         let j = i
//        while (j>0 && arr[j-1]>arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;
//         j--
//        }
//     }
//     return arr
// }

// sort(arr)
// console.log(arr[arr.length-1])


// second largest elemnt in an array without sorting 

// bruet

//  let arr = [3,3,2,1,8,2];

//  function lastElem(arr) {
//     for (let i = 0; i < arr.length; i++) {

//     let j = arr.length-1;

//     while (j>0) {
//         if (arr[j]<arr[j-1]) {
//             let temp = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1] = temp; 
//         }
//         j--;
//     }
// }

//     let largest = arr[arr.length-1];
//     for (let j = arr.length-2; j>=0; j--) {
//         if (arr[j]<largest) {
//            return arr[j]
//         }

//     }
// }

//  console.log(lastElem([3,3,3,3,3,3]))


// Better

// function FindSecondLargest(arr) {
//     let largest = arr[0];
//     let seconLarge = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if (largest<arr[i]) {
//             largest = arr[i]
//         }

//     }

//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j]<largest && arr[j]>seconLarge) {
//             seconLarge = arr[j]
//         }

//     }
//   return seconLarge;
// }

// console.log(FindSecondLargest([2,4,6,8,8.9,9]))

// optimal
let arr = [1, 2, 4, 7, 7, 5];

function SecondLargestOptimal(arr) {
    let largest = arr[0];
    let secondLargest = arr[arr.length - 1];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            let temp = largest;
            largest = arr[i];
            secondLargest = temp;

        } else {
            if ( arr[i]!=largest && arr[i] > secondLargest) {
                secondLargest = arr[i]
            }
        }


    }

    return secondLargest;

}

console.log(SecondLargestOptimal([7,6,9,3,2,5,9]))
console.log(9>9)


