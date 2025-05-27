/*Using Constructor Way*/
const blinkitUser = new Object({
    name: 'Rohit',
    age: 48
})
console.log(blinkitUser);

//Another simple way
const tinderUser = {}

tinderUser.name = "Sushmit"
tinderUser.mobile = 4845151513
tinderUser.sex = "male"

console.log(tinderUser);

//Nested Objects

const familyTree ={
    Ram : {
        NehaSurvana : {
            name: 'ansh',
            name2: 'vansh'
        },
        ArjunSharma: {},
        DeeptiSharma: {
            name3: 'parul',
            name4: 'deepak'
        }
    }
}

console.log(familyTree.Ram.DeeptiSharma.name3);
// console.log(familyTree.Ram?.DeeptiSharma.name3);     //? if ram exists in this chain, it will continue finding

//Assign Method
const obj1 = {a:22,b:56}
const obj2 = {c:228,d:78}
const obj3 = {e:8,f:785454}

const objFinal = Object.assign({},obj1,obj2,obj3)
console.log(objFinal);

//Using spread operator [Easy & fun]
objNew = {...obj3,...obj1}
console.log(objNew);

//You will get data from web in this format [{}] i.e objects inside arrays.
const webFormData = [
    {name: 'Ashu', age: 45},
    {email: 'bjkbnfjk@yol.com', nameL:'Singh'}
]

//to access this data
console.log(webFormData[0].name);   //when we used index no. now it's acting like an object.properties can be used

//To get all keys from an object (Useful when runnning loops)

console.log(Object.keys(tinderUser));   //Output Data Type is Array
console.log(Object.values(tinderUser));
//entries convert array into multiple sub-arrays 
console.log(Object.entries(tinderUser)); 


//To check if it has property or not [of Array]
console.log(tinderUser.hasOwnProperty('sex'));  //boolean value

