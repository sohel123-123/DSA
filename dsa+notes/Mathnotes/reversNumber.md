<!-- REVERSE AN ARRAY -->

 n=1234005000
let rn =0
while (n > 0) {
     let lastDigit = n % 10
     rn = rn*10
     rn +=lastDigit 
     n = Math.floor(n/10)
}
console.log(rn)


1) to reverse an number you have to divide it with 10 and you will get the last digit
2) by multipying the revesed number with 10 you can add  the last digit to the end of the reversed number
3) and you have to use Math function for exclude the last Digit to the original number

    SIMILAR PROBLEMS ARE

    *check palindrome
    *check for amstrong number