

// Variables cannot be reserved keywords
// they should be meaningful
// cannot start with a number
// cannot contain a space or hyphen
// are case-sensitive


let FirstName
console.log(FirstName);

let firstName = 'Mosh';
let lastName = 'HAMEDANI';
console.log(firstName, lastName);

//Constant:
const interestRate = 0.3;
console.log(interestRate);

// Primitive types:
// string, number, boolean, undefined, null


let isApproved = false; // boolean literal
let selectedColor = null;

// Reference types:
// objects, arrays, functions

let person = { //object literal
name: 'Mosh',
age: 30
};

// dot notation
person.name = 'John';

// bracket notation
let selection = 'name';
person['selection'] = 'Mary';

console.log(person.name);
