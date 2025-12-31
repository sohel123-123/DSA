var isPalindrome = function(x) {
    let dup = x;
    let rN = 0;
    while (x>0) {
        let lastDigit = x%10;
    rN = rN*10+lastDigit;
    x = Math.floor(x/10)
}
    if(rN == dup) {
        return true
    } else {
        console.log(dup)
        console.log(rN)
        return false
    }
    
    
};

console.log(isPalindrome(10))