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

// var intersection = function(nums1, nums) {
//     let map = new Map();
//     let temp = [];
//     for (let i = 0; i < nums1.length; i++) {

//         for (let j = 0; j < nums.length; j++) {
//             if (nums1[i]==nums[j]) {
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

// var intersection = function(nums1, nums) {
//     let set = new Set(nums1);
//     let ans = [];
// for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i]) && !ans.includes(nums[i])) {
//         ans.push(nums[i])
//     }

// }
// return ans

// };

// console.log(intersection([1,2,2,1],[2,2]))


// intersection of two arrays-II using hashing

// var intersect = function(nums1, nums) {
//     let map = new Map();
//     let temp = [];
//     for (let i = 0; i < nums1.length; i++) {
//         console.log(map.get(nums1[i]));
//         map.set(nums1[i],(map.get(nums1[i])|| 0)+1)

//     }


//     for (let j = 0; j < nums.length; j++) {

//         if (map.has(nums[j]) && map.get(nums[j])>0) {

//             temp.push(nums[j])
//             map.set(nums[j],map.get(nums[j])-1)
//         }
//     }

//     return temp;
// };

// console.log(intersect([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4]))




// Subarray sum equal to K bruetForce

// function subarray(arr,k) {
//     let output = 0;

//     for (let i = 0; i <arr.length; i++) {
//         let sum = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum+=arr[j]
//             if (sum==k) {
//                 output+=1;

//             }

//         }

//     }
//     return output
// }

// console.log(subarray([1,2,3],k=3),"output")



// Subarray sum equal to K using hashing

// var subarraySum = function (nums, k) {
//     let sum = 0;
//     let count = 0;
//     let map = new Map();
//     map.set(sum, 0)
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];               // step 1] add the value into the sum

//         if (map.has(sum-k)) {        // step 2] check if ( sum-k ) exist in the map or not if exist then add the frequency
//             count+=map.get(sum-k)    // of the key into count
//         }

//         if (map.has(sum)) {          // step 3] if sum exist in the map then increase the frequency by one and if not exist
//             map.set(sum, map.get(sum)+ 1)     // then set it with 1
//         }  

//         else {
//             map.set(sum,1)
//         } 

//     };
//     return count;
// };

// console.log(subarraySum([1],k=0),"output")


// gfg problem difficulty medium

// function subarryK(array,k) {
//     let map = new Map();
//     let sum = 0;
//     let longest = 0;
//     map.set(sum,-1)
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i];
//         if (map.has(sum-k)) {
//             let subArrLength = i-map.get(sum-k) 
//             if (subArrLength>longest) {
//                 longest=subArrLength
//             }
//         }

//         if (!map.has(sum)) {
//             map.set(sum,i)
//         }
        
//     }
//     return longest;
// }

// console.log(subarryK([-5, 8, -14, 2, 4, 12],-5))

//  Longest Consecutive Sequence *bruetForce *medium

// var longestConsecutive = function(nums) {
//     let longest = 0;
//     let count =1
//     let nums =nums.sort((a,b) => a-b)
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] == nums[i-1]) {
//             continue;
//         }
//         else if (nums[i]==nums[i-1]+1) {
//             count++;
//         } else { 
//         longest = Math.max(count,longest)
//         count =1;
//         }
//     }
//     longest = Math.max(longest, count);

//   return longest
// };

// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))



//  Longest Consecutive Sequence *set *medium

// var longestConsecutive = function(nums) {
//     if(nums.length<1) return 0;
//     let longest = 0;
//     let count =1
//     let set = new Set(nums)
//     for (let a of set) {
//         if (!set.has(a-1)) {
//             let val = a
//             while (set.has(val+count)) {
//                 count++
//             }
//             longest = Math.max(longest,count)
//             count = 1;
//         } else {
//             continue
//         }
     
//     }
// console.log(set)
//   return longest
// };

// console.log(longestConsecutive([100,4,200,1,3,2]))