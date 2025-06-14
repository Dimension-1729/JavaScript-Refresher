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

const language = [
    {
        course: 'python',
        price: 500
    },
    {
        course: 'java',
        price: 850
    },
    {
        course: 'c++',
        price: 650
    },
    {
        course: 'html',
        price: 100
    },

]

// language.forEach( (item) => {       //callback func ke parameter ke har value ka access hota hai
//     console.log(item.course);
//     console.log(item.price);
    
// })

//for each doesn't return anything

let values = language.forEach( (item) => {       //callback func ke parameter ke har value ka access hota hai
    console.log(item.course);
    console.log(item.price);
    return item //it will still return undefined
    
})

console.log(values);
