
Select the range of the unsorted array: Use an outer loop (i) that runs backward from n-1 to 0 (where n is the size of the array).
 The value i = n-1 means the range is from 0 to n-1, i = n-2 means the range is from 0 to n-2, and so on.

Push the maximum element to the end of the selected range: Use an inner loop (j) that runs from 0 to i-1.

 Compare adjacent elements and swap them if arr[j] > arr[j+1].

  Repeating this process ensures the maximum element in the current range moves to index i.

Progressively sort the array: After each outer loop iteration, the last part of the array becomes sorted.
 For example:
After the first iteration, the element at the last index is sorted.

After the second iteration, the last two elements are sorted.

This continues until the entire array is sorted.

Complete sorting: After n-1 iterations, the whole array will be sorted.

// BubbleSort class implementation in JavaScript
class BubbleSort {
    / Function to perform Bubble Sort
    bubbleSort(arr) {
        let n = arr.length;

        // Outer loop runs from the end towards the beginning
        for (let i = n - 1; i >= 0; i--) {
            // Inner loop iterates up to the i-th index
            for (let j = 0; j <= i - 1; j++) {
                // If current element is greater than the next element, swap them
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        // Print the sorted array
        console.log("After Using Bubble Sort:");
        console.log(arr.join(" "));
    }
}

// Driver code (equivalent to Java's main method)
(function main() {
    // Input array
    let arr = [13, 46, 24, 52, 20, 9];

    console.log("Before Using Bubble Sort:");
    console.log(arr.join(" ")); // Print array elements in one line

    // Create object of BubbleSort class
    let sorter = new BubbleSort();
    sorter.bubbleSort(arr);  // Call bubbleSort method
})();




13,46,24,52,20,9 <==un-sorted array

step-1
13,24,46,20,9,52 -->bigest element came in the last   0--n-1
              --
        |
13,24,20,9,46,52                                       0--n-2
           -----
        |
13,20,9,24,46,52                                        0--n-3
        --------
        |
13,9,20,24,46,52                                         0--n-4
     -----------
        |
9,13,20,24,46,52                                          0---1
  --------------  --->sorted element


syntax
    function Bubble_sort(arr) {
        let didSwap = 0;
        for(i=arr.length-1; i>=1; i--) {
            for(j=0; j<=i-1; j++) {
                if(arr[j]>arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    didSwap = 1
                }
            }
            if(didSwap == 0) { <--------- for checking the best case
                break;
            }
        }
        return arr
    }

    worst & average complexity = O(n^2)

    best complexity = O(n)