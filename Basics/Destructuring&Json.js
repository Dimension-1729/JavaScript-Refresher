//Destructuring course objects

const course = {
    name: 'JavaScript',
    Instructor: 'Ishant',
    Price: 45685
}

//Destructuring syntax const {property_name} = Object_Name
// curly braces inside a function also mean destructuring
const {Instructor:teach} = course   //for shortning and ease of access
console.log(teach);

/*From API you get data in one of these formats

Earlier, we used to get in XML.

Now we get in JSON, just like objects
{
"name": "Kiran",
"age: 45",
"Mobile": 41524165
}

or in array format like this; Multiple objects inside array
[
{}
{}
{}
]
*/

/* Important Links:-
https://jsonformatter.org/
https://randomuser.me/
*/