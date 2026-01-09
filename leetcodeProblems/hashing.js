// let arr = [1,2,3,2,2,4,4,6,6];

// let hash = new Array(arr.length).fill(0);

// for (let i = 0; i < arr.length; i++) {
//     hash[arr[i]]+=1
    
// }
// console.log(hash)

// get the none duplicate values 

// let arr = [10,45,18,9,9,10,45,10,10];

// let set = new Set()

// for (let i = 0; i < arr.length; i++) {
//     if(set.has(arr[i])) {
//         set.delete(arr[i])
//     } else {
//         set.add(arr[i])
//     }
    
// }

// console.log(set)

var checkIfPangram = function(sentence) {
    let set = new Set(sentence) 
    if (set.size == 26) return true;

    return false
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))