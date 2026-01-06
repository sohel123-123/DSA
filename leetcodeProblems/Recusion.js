//Print  names N times

//  function printName (i,n) {
//         if(i>n) return ; 

//         console.log("sohel");

//         printName(i+1,n);
//     }

//     printName(1,3)


// Print Linearly from 1 to n

// function printNumber(i,n) {
//     if(i>n) return;

//     console.log(i)

//     printNumber(i+1,n)
// }

// printNumber(1,5)

// print in terms of n-->1


// function ReversePrint(i,n) {
//     if(i==n) return;
//     console.log(n-i)
//     ReversePrint(i+1,n)
// }

// ReversePrint(0,5)


//print 1 to n using Backtracking

// function PrintBacktracking(i, n) {
//     if (i < 1) return;
//     PrintBacktracking(i-1, n)
//     console.log(i)
// }
// PrintBacktracking(3,3) 


//print n to 1 using Backtracking

// function PrintBacktracking(i, n) {
//     if (i > n) return;
//     PrintBacktracking(i+1, n)
//     console.log(i)
// }
// PrintBacktracking(1,3) 

//print the sum of first n numbers using parameter

// function PrintBacktracking(i, sum) {
//     if (i <1) {
//         return console.log(sum)
//     }
//     PrintBacktracking(i-1, sum+i)
    
// }
// PrintBacktracking(3,0) 


//print the sum of first n numbers using function

// function PrintBacktracking(n) {
//     if (n == 0) {
//         return 0;
//     }
//     return n+PrintBacktracking(n-1)  
// }
// console.log(PrintBacktracking(3) ) 

//Reverse an array using recursion

// let a = [10,25,32,46,55]

// function Reverse(i,n) {
//     let length = n.length
//     if(i>=Math.ceil(n.length/2)) return;
//     let temp = n[i]
//     n[i] = n[length-i-1]
//     n[length-i-1] = temp
//     Reverse(i+1,n)
//     return n
// }



// console.log(Reverse(0,a))

//Check palindrome


function palindrome(str,i) {
    const regex = /[^a-zA-Z]/g
    let Str = str.replace(regex,'').toLowerCase()
    if(str.length==0) return true;
    if(i>=Str.length/2) return true;
    let temp1 = Str[i];
    let temp2 = Str[Str.length-i-1];
    if (temp1!==temp2) {
        return false
    }
    
   return palindrome(str,i+1)
}

console.log(palindrome("A man, a plan, a canal: Panamaa",0))

// function isPalindrome(s) {
//     const regex = /[^a-zA-Z]/g
//     console.log(s.replace(regex,''))
// }
// isPalindrome("A man, a plan, a canal: Panama")