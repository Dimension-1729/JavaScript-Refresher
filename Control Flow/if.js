const whetherLoggedIn = true

if (whetherLoggedIn) {
    //this code will be executed
}

/*Comparison Operators:-
<
>
<=
>=
!=
==  same value check
=== strict type, same value 
!== 
Logical Operator
&& compare both statements for true
|| either this true or this, for checking multiple conditions
*/

if (2 !== '2') {
    console.log('executed');
    
}
if (2 === '2') {    //will result false as type doesn't match
    console.log(' Second executed');
    
}

//Short-Hand notation for if using implicit scope(no need for {}), use of ; is must

const balance = 1000

if (balance > 500) console.log('Balance is normal'), console.log(' but messy');
;

//A normal if-else

const score = 250

if (score >=250) {
    console.log('Pass');
    
} else {
    console.log('Fail');
    
}

//Multiple else-if's 

if (balance <500) {
    console.log('less than 500');
} else if (balance < 800) {
    console.log('less than 800');
    }
else (balance < 1200) 
    console.log('less than 1200');

//For checking multiple conditions;

const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false
const userSignedUp = true

if (userSignedUp && userLoggedInFromGoogle) {
    console.log('User signed up from google');
    
} else {
    console.log('User did not signed up');
    
}

// using or ||

if (userLoggedInFromEmail || userLoggedInFromGoogle) {  //if either condition becomes true
    console.log('User has signed up.');
    
} 