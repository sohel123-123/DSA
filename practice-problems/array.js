// largest elemnt in an arry
let arr = [3,2,1,5,2]

let largest = arr[0];
let secondLargest = arr[1] 

// second largest elemnt in an array

for (let i = 0; i < arr.length-1; i++) {
    
    if (arr[i]>secondLargest) {
        secondLargest = arr[i];
    }
    if (secondLargest>largest) {
            let temp = largest;
            largest = secondLargest;
            secondLargest = temp;
        }
}

console.log(secondLargest,"second")
console.log(largest,"first")