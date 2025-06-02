const myNumb = [1,2,3,4,5,6]

//map also returns value

// let returnedValues = myNumb.map( (numb) => numb < 5)    //this will check values and return boolean

let returnedValues = myNumb.map( (numb) => numb + 10)
console.log(returnedValues);

//Chaining of Methods

let chainedValue = myNumb
.map( (numb) => numb * 100)
.map( (numb) => numb +20)
.filter( (numb) => numb >= 245)

console.log(chainedValue);
