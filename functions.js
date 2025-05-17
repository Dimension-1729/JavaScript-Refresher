
//Adding two numbers
function addTwoNumb(x,y){   //x,y function parameters
    console.log(x+y);   //Function Scope, 
    
}

addTwoNumb(2,3)     //function arguments
addTwoNumb(2,'a')   //converts 2 into string & adds them together

const result = addTwoNumb(5,6)  //This will just print 11, will not store 11 into result as the function doesn't return anything as it just prints and not returns

//You can see it by;
console.log(result);        //Will give undefined

function subTwoNumb(x,y){   
    let final = x-y
    return final
    console.log(x+y);   //this will not be executed, after return function is over
    
}

let answer = subTwoNumb(10,5)
console.log(answer);


//Function for checking if user has logged in

function isLoggedIn(username = 'user'){     //default value is user we will now never go into if block and if nothing is passed it will print user
    if(!username) {   //if username is not defined
        console.log('Enter a username');
         
        return;
    }
    return `${username} just logged in`;
    
}

isLoggedIn(undefined)
console.log(isLoggedIn('Kumar012'))
console.log(isLoggedIn())   //default value gets printed

//Rest operator(for passing multiple values in arguments) or Spread operator, name depends on use case

function totalCartValue(value1,value2,...values){
    return values   //you will get what you're asking the function here
}

console.log(totalCartValue(100,200,500,600,800));
