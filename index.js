// // for (initialExpression; condition; incrementExpression)
// //statement

//  for (let i=1; i<=5; i++) {
//  console.log('Hello world', i);
//  }

// for (let i=1; i<=5; i++) {
//     if (i % 2 !==0)
// console.log(i);
// }

// //while

// // let i = 0;
// // while (i <= 5) {
// //     if (i % 2 !==0)
// //     console.log(i);
// //     i++;  
// // }

// //do... while 

// let i = 0;
// do {
//     if (i % 2 !==0)
//     console.log(i);
//     i++;    
// } while (i<=5);


// // for in loop - for iterating over the properties of an object

// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
// console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// // for (let index in colors)
// // console.log(index, colors[index]);

// // for... of loop - ideal for iterating over elements or items in arrays (new!)

// for (let color of colors)
// console.log(color);

// Exercice:

// Write a function that takes two numbers and returns the max of the two

// let a = 2;
// let b = 4;

// function max(a,b) {
// if (a > b) 
// return a;
// else
// return b; 
// }
// console.log(max(a,b))


function max(a,b) {
    return (a > b) ? a : b;
}

let number = max(17,18);
console.log(number);


// Exercice 2: Implement function that returns true if the image is landscape

// function isLandscape(width, height) {
//     if (width > height) 
// return true;
// return false; 
// }
// no need to explicitly return true false

function isLandscape(width, height) {
    return (width > height); 
}

console.log(isLandscape(800,600));



