Select a pivot element from the array (commonly the last element, but can be first, middle, or random).

Rearrange the elements in the array such that all elements smaller than the pivot are placed before it and all greater elements are placed after it (this step is called partitioning).

After partitioning, the pivot is in its correct sorted position.

Recursively apply the same process to the subarrays on the left and right of the pivot.

Base condition for recursion is when the subarray has zero or one element, as it's already sorted.

Combine the results of the recursive calls to obtain the fully sorted array.


1] pick a pivat & plase it in its correct place in the counted array

2] smaller on the left 
    larger on the right

    seudoCode

    function qs(arr,low,high)
    {
        if(low<high)
        {
            partitionIndex = partition(arr,low,high)
            qs(arr,low,partitionIndex-1)
            qs(arr,partitionIndex-1,high)
        }
    }

    partition(arr,low,high) {
        pivot = arrr[low],
        i = low;
        j = high;

        while (i < j) {
            while(arr[i] <= arr[pivot] && i <= high-1) {
               i++;
            }

            while(arr[i] > arr[pivot] && j >= low+1) {
               j--;
               if(i<j) swap(arr[i],arr[j])
            }
            
        }
    }