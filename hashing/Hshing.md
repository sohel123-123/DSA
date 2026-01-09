    hashing is a technique to store and retrieve data in constant time using hash tables.

    1) hashing number  Bruetforce

    number = 1;

    f(number,arr) {
        cnt = 0 ;
        for(i-0;i<n; i++)
        {
            if(arr[i] == number)
                cnt = cnt+1;
        }
        return cnt;
    }

    2) set = store unque value used in hashing
    let set = new Set()

    properties
    1] set.add(19)
    2] set.delete(19)
    1] console.log(set.size); for getting the size of set
    1] console.log(set.has(100)); check that perticular value exist in the set or not returns boolean value

    3) Map is a data structure it is like objects it stores key and values here keys are always unique and values can be dublicate 