//It's a built-in function, Higher order function

const coding = ['python', 'css' , 'html']

//Inside forEach() there is a callback function, a function that has no name, function argument will automatically fetch array items
coding.forEach( function (items) {      //or use arrow function () => {}
    console.log(items);
    
})

//We can also declare function elsewhere and give it's reference

function print(items){
    console.log(items);
    
}

coding.forEach(print)   //only have to give referene and not execute here

//forEach() bring several other parameters along with it

coding.forEach( (items, index, array) => {
    console.log(items, index, array);
    
})