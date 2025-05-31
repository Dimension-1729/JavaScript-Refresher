//Example of strings and objects inside array's 
// ["", "", ""]
//[{},{},{},{}]

 //for-of loop

 const friendNames =['shiv','mehak','divit','monkey']
const friendFullName = 'Sushmit Kumar'

for (const element of friendNames) {
    console.log(element);
    
}
//can be applied to strings as well
for (const element of friendFullName) {
    console.log(element);
    
}

//Maps are object but they remeber the insertion order of keys while object does not, no duplicate values. Jis order me apne enter kiya hai ussi order me rahega.


const map = new Map()

map.set('UP','Uttar-Pradesh')
map.set('HP','Himachal-Pradesh')
map.set('AP','Andhra-Pradesh')
map.set('UK','Uttrakhand')
map.set('HP','Himachal-Pradesh')        //only 1 value will be seen as it holds no duplicates

console.log(map);   //Order is preserved

//De-structuring of Array to print map into individual elements

for (const [keys,value] of map) {
    console.log(keys, ':- ', value);
    
}

for (const element of map) {
    console.log(element);   //This will return arrays and not individual values
    
}

//Using for_of loop you cannot iterate objects

const fullName = {
    first: 'Surya',
    last: 'Chaurasia'
}
//This will give non iterable error

// for (const [keys,value] of fullName) { 
//     console.log(keys, ':- ', value);
    
// }