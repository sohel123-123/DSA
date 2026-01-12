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


 // sort the people

// var sortPeople = function(names, heights) {
    
// let map = new Map();

// for (let i = 0; i < names.length; i++) {
//     map.set(heights[i],names[i])
    
// }
// console.log(map,"map")
// console.log(names,"name")

// heights.sort((a,b )=>b-a)
// console.log(heights,"height")
// for (let i = 0; i < heights.length; i++) {
//    names[i] = map.get(heights[i])
// console.log(map.get(heights[i]))
// }
// return names
// };

// console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))


// // two sum bruetforce

// var twoSum = function(nums, target) {
//     let val = []

//     let num1 = 0;
//     for(let i = 0; i<nums.length; i++) {
       
//        for (let j = i+1; j < nums.length; j++) {
//         if (nums[i]+nums[j]==target ) {
//             val.push(i);
//             val.push(j);
//             return val
//         }
        
//        }

//     }
    

// };
// console.log(twoSum([3,2,3],6));


// intersection of two arrays bruetforce

// var intersection = function(nums1, nums2) {
//     let map = new Map();
//     let temp = [];
//     for (let i = 0; i < nums1.length; i++) {
        
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i]==nums2[j]) {
//                 if (temp.includes(nums1[i])) {
//                     continue;
//                 }
//                 temp.push(nums1[i])
//             }
            
//         }
        
//     }
//     return temp
// };

// console.log(intersection([4,9,5],[9,4,9,8,4]))


// intersection of two arrays using hashing

var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let ans = [];
for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i]) && !ans.includes(nums2[i])) {
        ans.push(nums2[i])
    }
    
}
return ans
    
};

console.log(intersection([1,2,2,1],[2,2]))