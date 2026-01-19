

Merge Sort --->Divide & Merge
                                                        [3,1,2,4,1,5,2,6,4]
                                                                /\
                                                               /  \
                                                              /    \
                                                    [3,1,2,4,1]     [5,2,6,4]
                                                        /\                   /\
                                                       /  \                 /  \
                                                      /    \               /    \
                                                 [3,1,2]    [4,1]      [5,2]     [6,4]
                                                 /\            /\          /\         /\
                                                /  \          /  \        /  \       /  \
                                               /    \      [4]    [1]    [5]  [2]  [6]   [4]
                                             [3,1]  [2]  
                                                /\
                                               /  \
                                            [3]  [1]


suedo code  []

function merge_sort(arr,low,high) {
    if(low >=high)return;
    const mid = Math.floor((low + high)/2)

    merge_sort(arr,low,mid)
    merge_sort(arr,mid+1,high)
    return merge(arr,low,mid,high)

}

//merge two halves
function merge(arr,low,mid,high) {
    high=Math.floor(high)
      let temp = [];
      let left = low;
      let right = mid + 1;

      //Merge both halves
      while(left <= mid && right <= high)
      {
          if(arr[left] <= arr[right]) { 
               temp.push(arr[left])
               left++;
          } else {
               temp.push(arr[right])
               right++;
          }
      }

      //Add remaining left element
      while(left <= mid) {
          temp.push(arr[left]);
          left++;
      }
      //Add remaining right element
      while(right <= high) {
          temp.push(arr[right]);
          right++;
      }
      //Copy temp back to original array
      for(let i = low; i<=high; i++ ) {
          arr[i] = temp[i-low]
      }
      return arr
}
let arr = [3,1,2,4,1,5,6,2,4]
console.log(merge_sort(arr,0,arr.length-1));



for dry-run

     [3,2,4,1,3]
          /\
         /  \
    [3,2,4]   [1,3]