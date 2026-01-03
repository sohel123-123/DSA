Recursion mean when a function call itself until the certain condition is met

1) Print names N times using recursion

    function printName (i,n) {
        if(i>n) return ; <--------------Base case

        print("sohel");

        printName(i+1,n);
    }

    *Time Complexity
    O(n) ------->it is calling n times the same function





    |printName(3,3)|
    |              |
    |printName(2,3)|
    |              |
    |printName(1,3)|
    |______________|

      Stack Space