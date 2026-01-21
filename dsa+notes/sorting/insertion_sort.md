In each iteration, select an element from the unsorted part of the array using an outer loop.
Place this selected element in its correct position within the sorted part of the array.
Use an inner loop to shift the remaining elements, if necessary, to accommodate the selected element.
 This involves shifting elements by one position until the selected element can be placed in the correct position.
Continue this process until the entire array is sorted.

class Solution {
    // Function to sort the array using insertion sort
    insertionSort(nums) {
        let n = nums.length; // Size of the array 
        
        // For every element in the array 
        for (let i = 1; i < n; i++) {
            let key = nums[i]; // Current element as key 
            let j = i - 1;
            
            // Shift elements that are greater than key by one position
            while (j >= 0 && nums[j] > key) {
                nums[j + 1] = nums[j];
                j--;
            }
            
            nums[j + 1] = key; // Insert key at correct position
        }
        
        return nums;
    }
}

// Main function
(function() {
    // Create an instance of solution class
    let solution = new Solution();
    
    let nums = [13, 46, 24, 52, 20, 9];
    
    console.log("Before Using Insertion Sort:");
    console.log(nums.join(" "));
    
    // Function call for insertion sort
    nums = solution.insertionSort(nums);
    
    console.log("After Using Insertion Sort:");
    console.log(nums.join(" "));
})();

Takes an element and place it in the current order

syntax
for(i=0; i< n-1; i++) {
    j=i;
    while(j>0 && arr[j-1]>arr[j]) {
        j--;
    }
}

  worst & average complexity = O(n^2)

    best complexity = O(n)