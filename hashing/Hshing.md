    hashing is a technique to store and retrieve data in constant time using hash tables.

    1) hashing number  Bruetforce

    number = 1;

    f(number,arr) {
        cnt = 0 ;
        for(i-0;i<n; i++)
        {
            if(arr[i] == number)
                cnt = cnt+1;
        }
        return cnt;
    }

    2) set = store unque value used in hashing
    let set = new Set()

    properties
    1] set.add(19)
    2] set.delete(19)
    3] console.log(set.size); for getting the size of set
    4] console.log(set.has(100)); check that perticular value exist in the set or not returns boolean value

    5) Map is a data structure it is like objects it stores key and values here keys are always unique and values can be dublicate 
    6] using key we can change the value of the of the key    map.set(arr[i],map.get(arr[i])+1)

    let map = new Map();
    properties
    1] map.set("amit",50) ⬅️ use for setting map value
                 ⬆️  ⬆️
                 key  value
    
    2] map.delete("amit") ⬅️ use for deleting the value

    3] console.log(map.has("amit")) ⬅️ use to check if a perticular value exist or not return boolean value

    4] console.log(map.size) ⬅️ use for checking map size

    5] for traversing/iterating on the map we use for-of-loop 

        e.g
        for(let [key,value] of map) {
            console.log(key +"->"+ value)
        }

    6] for traversing/iterating on the maps key 

        e.g
        for(let key of map.keys()) {
            console.log(key)
        }

    6] for traversing/iterating on the maps values

        e.g
        for(let value of map.values()) {
            console.log(values)
        }

    **in map we always perform actions on the key not on values

    map vs object

s.r	Feature	               | object	                               |map
_____________________________________________________________________________________
1	Key Types	           | Only Strings and Symmbols	           |any data type(obj,fnc,nan)
2	Key Obder	           | Not guaranteed	                       |Maintain insertion order
3	Iteration	           | Needs for-in of object.keys()         |Directly iterable with for…of or .forEach()
4	Size Property	       | no direct way -- use object.keys(obj) |has.size property
5	Performance	           | optimized for static data	           |Faster for frequent addition/removals
6	prototype inheritance  | inherets from object.prototype	       |pure data container - no prototype chain issues
7	Use case	           | when key names are known and simple   |when you need dynamic keys or frequent updates


