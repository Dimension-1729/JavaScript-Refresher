/* Arrays are inside [elements] */
//Declaring Arrays
const uncles = ['shyam','ram','anil','sunil']

//Another method, here we do not require any square brackets
const brothers = new Array(1,-15,'ashok',false)

console.log(brothers[1]);
console.log(uncles[2]);

/*Array Methods*/
//To add or delete from the end [push or pop]
uncles.push('Guddi')
uncles.push('Ragini')
console.log(uncles);
uncles.pop()    //Removes last element i.e Ragini from array
console.log(uncles);

//To add or delete from the start of an array [shift or unshift], it is computationally expensive
brothers.unshift('Surya') //to add we use unshift
console.log(brothers);
uncles.shift()
console.log(uncles);

//Questionaire methods of arrays

let arr1 = [10,11,12,13,14,15,'sonu']
let arr2 = [16,17,18,19,20]

//To find if an element is present in array or not
console.log(arr1.includes(1,'sonu'));

//To get index number of an element by element value, if not it gives -1
console.log(arr2.indexOf(19));

//To convert an array into a string
console.log(arr1.join());

//Slice: It does not alter the original array, start(included) End (not included)
console.log(arr1.slice(3,7));
console.log(arr1);  //Original array is not changed

//Splice: It changes or splits the array, start(included) End (not included) splice(start element, delete count)
console.log(arr2.splice(0,3));
console.log(arr2);


