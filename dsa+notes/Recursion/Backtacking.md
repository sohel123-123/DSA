
Backtracking means printig 1 to n without using +1 we use here -1

syntax
    f(i,n) 

    {
        if(i<1) return;
        f(i-1,n);
        print(i);
    }

    f(3,3)

1) we call funtion before print statement because until the function return we will not print anyThing