
Backtracking means printig 1 to n without using +1 we use here -1

syntax
    f(i,n) 

    {
        if(i<1) return;
        f(i-1,n);
        print(i);
    }

    f(3,3)

1) Backtracking means function go deep and at the time of returning it do the work

    qoustions
    *1) print 1 to n using Backtracking
    *2) print n to 1 using Backtracking
    *3) print the sum of first n numbers using function
    *4) reverse an array (concept:Backtracking,pointers)