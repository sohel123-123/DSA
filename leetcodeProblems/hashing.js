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

// var checkIfPangram = function(sentence) {
//     let set = new Set(sentence) 
//     if (set.size == 26) return true;

//     return false
// };

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))

// let map = new Map();

// map.set("raj",6);
// map.set("amit",3);
// map.set("sumit",5);
// map.set("ali",4);
// map.set("raj",3);

// map.delete("amit")
// console.log(map.has("sumit"))
// console.log(map)

// let arr = [10,3,5,6,10,1,3,5,5,7]

// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//         map.set(arr[i],map.get(arr[i])+1)
//     } else { 
//         map.set(arr[i],1)
//     }
    
// }

// console.log(map)


 

var sortPeople = function(names, heights) {
    

let map = new Map();

for (let i = 0; i < names.length; i++) {
    map.set(heights[i],names[i])
    
}


heights.sort((a,b )=>b-a)
console.log(heights.sort(a,b =>b-a))
for (let i = 0; i < heights.length; i++) {
   names[i] = map.get(heights[i])

}
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))