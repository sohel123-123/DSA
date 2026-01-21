First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range. 

The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on. (Initially, the range will be the whole array starting from the first index.)

Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.

After that, we will swap the minimum element with the first element of the selected range(in step 1).

Finally, after each iteration, we will find that the array is sorted up to the first index of the range.


function selectionSort(arr) {
    let n = arr.length;

    // Traverse the array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume current index is the minimum

        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if smaller element is found
            }
        }

        // Swap the found minimum with the first element of unsorted part
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    // Print the sorted array
    console.log("After selection sort:");
    console.log(arr.join(" "));
}

// Driver code
let arr = [13, 46, 24, 52, 20, 9];

// Print array before sorting
console.log("Before selection sort:");
console.log(arr.join(" "));

// Call selection sort
selectionSort(arr);





[13,46,24,52,20,9] --> get the minimum and swap it
---             --
        |
[9,13,24,52,20,46]
 _ --          --
        |
[9,13,20,52,24,46]
 ____ --    --      
        |
[9,13,20,24,52,46]
________ -- --   
        |
[9,13,20,24,46,52]
___________ -- --   --->swaped between
            __
        |
        sorted array


swap at index 0 ,& minimmum index [0--n-1]
swap at index 1 ,& minimmum index [0--n-1]
swap at index 2 ,& minimmum index [0--n-1]        n-2 -->we dont need to include the last elment because it is sorted


for(i=0; i<=n-2; i++) {
    let min = i
    for(j=i;j<=n-1; j++){
        if(arr[j] < arr[min]) min = j;
    }
    let temp = arr[min];
      arr[min]=arr[i];
      arr[i]=temp

}

time complexity = O(n^2) ==> big o of n square


Bubble sort   [pushes the maximum th the last by adjucent awaps]

