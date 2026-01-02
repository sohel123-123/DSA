
finding the greatest common divisor

*BruetForce approach

    n1 = 9;
    n2 = 12;
    let hcf = 1
    for(let i=1; i<=min(n1,n2); i++>)

    {
        if(n1%i==0 && n2%i == 0) hcf = i
    }

    *we are checking every number
    *Time Complexity = O(min(n1,n2))



*Optimised approach

    Euclidian Algorithm
    hcf(n1,n2) = hcf(n1-n2,n2)    *n1>n2

    eg. hfc(20,15) = hfc(20-15==5,15)  = hfc(15-5,5) = hfc(10-5,5) = hfc(5-5,5) = hfc(0,5)  hcf = 5;

    * take two numbers apply euclidien alogorithm until one become zero and the other one will be gcd/hcf

    * two optimize it we do greater % smaller one of become zero


    while (a>0 && b>0) {
        if(a>b) a = a%b;
        else b = b%a;
    }

    if (a == 0) print(b)
    else print(a)