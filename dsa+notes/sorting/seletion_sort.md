
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

