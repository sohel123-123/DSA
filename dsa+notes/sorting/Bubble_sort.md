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