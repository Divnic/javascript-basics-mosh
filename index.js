// for (initialExpression; condition; incrementExpression)
//statement

 for (let i=1; i<=5; i++) {
 console.log('Hello world', i);
 }

for (let i=1; i<=5; i++) {
    if (i % 2 !==0)
console.log(i);
}

//while

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !==0)
//     console.log(i);
//     i++;  
// }

//do... while 

let i = 0;
do {
    if (i % 2 !==0)
    console.log(i);
    i++;    
} while (i<=5);


// for in loop - for iterating over the properties of an object

const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

// for (let index in colors)
// console.log(index, colors[index]);

// for... of loop - ideal for iterating over elements or items in arrays (new!)

for (let color of colors)
console.log(color);

