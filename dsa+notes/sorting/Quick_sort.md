
a] 1st element in the array
b] last element in the array
c] median of the array
d] random element of the array


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