

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

let selectedColors = ['red', 'blue']; // [] empty array
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors.length);

// performing a task
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);  
}

greet('John','Smith');
greet('Mary');

//calculating a value

function square(number) {
    return number * number;
}

// let number = square(2);
// console.log(number);
//or just:

console.log(square(2));