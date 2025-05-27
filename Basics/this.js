/*To refer to current context we use "this" keyword, to access all variables indise a given scope*/

let myObject = {
    username: 'Mohit',
    age: 28,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the team!`);
        console.log(this);  //it will refer to the current context
        
    }
}

myObject.welcomeMessage();
myObject.username = 'Rahul'
myObject.welcomeMessage()


//Here this will return empty as it has not been assignes any context but in inspect element in browser it gives window as it is the global object there.
console.log(this);

//Why we're unable to use this inside a function
// | Situation                    | `this` refers to             | `this.myName` works?        |
// | ---------------------------- | ---------------------------- | --------------------------- |
// | Inside a standalone function | Global object (or undefined) | ❌ No, unless explicitly set |
// | Inside an object method      | The object itself            | ✅ Yes                       |


function nameIt(){
    const myName = 'Kumar'
    console.log(this);
    console.log(this.myName);  //this will return undefined
    
}

nameIt()