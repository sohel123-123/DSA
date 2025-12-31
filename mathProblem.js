//Basic math


//Count the digits
// n = 123456789

// let cnt = 0
// while (n > 0) {
//     let lastDigit = n % 10
//     cnt+=1
//     n = Math.floor(n/10)
// }
// console.log(cnt)



// Reverse the number

// n=1234005000
// let rn =0
// while (n > 0) {
//     let lastDigit = n % 10
//     rn = rn*10
//     rn +=lastDigit 
//     n = Math.floor(n/10)
// }
// console.log(rn)


// check palindrome

// n=1001
// let rn =0 
// let dup = n
// while (n > 0) {
//     let lastDigit = n % 10
//     rn = rn*10+lastDigit
//     n = Math.floor(n/10)

// }

// if (dup==rn) {
//     console.log(dup,"is palindrome")
// } else {
//     console.log(dup,"is not palindrome")
// }

// check for amstrong number
// 123 = if 1*1*1 + 2*2*2 + 3*3*3 = 123 it is palindrome


// let n = 123;
// let sum = n;

// while (n>0) {
//     let lastDigit = n%10;
//     sum+=lastDigit*lastDigit*lastDigit
//     Math.floor(n/10)
// }
// console.log(n)
// if (n==sum) {
//     console.log(true)
// } else {
//     console.log(false)
// }

var reverse = function(x) {
    let ReverseNumber = 0;
    const INT_MAX = 2**31 - 1; 
    const INT_MIN = -(2**31);
    if (x>0) {
        while(x>0) {
    let lastDigit = x%10;
    ReverseNumber = ReverseNumber*10
    ReverseNumber+=lastDigit
    x = Math.floor(x/10)
}
    } else if (x<0) {
        let x2 =String(x)
        let x3 = x2.slice(1) 
        let rn = ''
     
        while (x3>0) {
            let lastDigit = x3%10 
            
            rn=rn*10               
            rn+=lastDigit;
            x3 = Math.floor(x3/10) 
            
        }

        ReverseNumber = rn*-1

        
    }
    
    //overflow
    if (ReverseNumber>INT_MAX || ReverseNumber<INT_MIN) {
        ReverseNumber = 0
    }
return ReverseNumber
};

console.log(reverse(1534236469))
