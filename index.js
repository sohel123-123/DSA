//q-19
// let n = 5
// let space = n-n
// for (let i = 0; i <n; i++) {
//     let word = "";
// //star
//     for (let j = 0; j <n-i; j++) {
//         word+="*"

//     }
// //space
//     for (let j = 0; j < space; j++) {
//         word+=" "

//     }
// //star
//     for (let j = 0; j <n-i; j++) {
//         word+="*"

//     }
//     space+=2
//     console.log(word)

// }

// let space2 = n*2-2
// for (let i = 1; i <=n; i++) {
//     let word = "";
// //star
//     for (let j = 0; j <i; j++) {
//         word+="*"

//     }
// //space
//     for (let j = 0; j < space2; j++) {
//         word+=" "

//     }
// //star
//     for (let j = 0; j <i; j++) {
//         word+="*"

//     }
//     space2-=2
//     console.log(word)

// }

//q-20
// let n = 5;
// let space = n*2-2
// for (let i = 0; i < n; i++) {
//     let word = "";
//     //star
//     for (let j = 0; j <=i; j++) {
//         word += "*";
//     }
//     //space
//     for (let j = 0; j < space; j++) {
//         word+=" "

//     }

//     //star
//     for (let j = 0; j <=i; j++) {
//         word += "*";
//     }
//     space-=2
//     console.log(word)

// }

// let space2 = 2
// for (let i = 0; i < n; i++) {
//     if (i==0) {
//         continue
//     }
//     let word = "";
//     //star
//     for (let j = 0; j <n-i; j++) {
//         word += "*";
//     }
//     //space
//     for (let j = 0; j <space2; j++) {
//         word+=" " 
//     }
//     //star
//     for (let j = 0; j <n-i; j++) {
//         word += "*";
//     }
//     space2+=2
//     console.log(word)

// }

//q-21

// let n = 5;
// let space = 0;
// for (let i = 0; i < n; i++) {
//     let word = ""
//    for (let j = 0; j <=n-1; j++) {
//     if (j==0||j==n-1||i==0||i==n-1) {
//         word+="*"
//     } else {
//         word+=" "
//     }

//    }
//     console.log(word)

// }

let n = 5;

// let star = 2*n-1;
// for (let i = 0; i < n; i++) {
//     let word ='';
//     for (let j = 0; j <=i; j++) {
//         word+=" "; 
//     }

//     for (let j = 0; j <star; j++) {
//         word+="*"
//     }
//     star-=2
//     console.log(word)

// }

// q-3

// for (let i = 1; i <=n; i++) {
//     let word = "";
//     for (let j = 1; j <=i; j++) {
//         word+=j

//     }
//     console.log(word)

// }

// q-4

// for (let i = 1; i <=n; i++) {
//     let word = "";
//     for (let j = 1; j <=i; j++) {
//         word+=i

//     }
//     console.log(word)
// }

// q-5
// for (let i = 0; i < n; i++) {
//     let word = "";
//     for (let j = 0; j < n-i; j++) {
//         word+="*"

//     }
//     console.log(word)
// }

// q-6
// for (let i = 0; i < n; i++) {
//     let word = "";
//     for (let j = 1; j <=n-i; j++) {
//         word+=j

//     }
//     console.log(word)
// }

//q-7
// for (let i = 0; i < n; i++) {
//     let word = "";
//     for (let j = 1; j <=n-i; j++) {
//         word+=j

//     }
//     console.log(word)
// }

//q-10
// for (let i = 0; i < n*2; i++) {
//     let word = "";
//     for (let j = 0; j <=i; j++) {
//                 word+="*"
//     }
//      if(i>n) {
//             for (let j = 0; j <n-(i-n); j++) {
//                 word+="*"
//             } 
//         } 
//     console.log(word)
// }

