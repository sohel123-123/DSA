
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