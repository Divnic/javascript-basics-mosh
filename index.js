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


//////////////////////////////////////
// Exercise 3 : fizzBuzz


const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
    return NaN; //'Not a number'

    if ((input % 3 === 0) && (input % 5 === 0)) 
    return 'Fizzbuzz';

    if (input % 3 === 0) 
    return 'Fizz';

    if (input % 5 === 0) 
    return 'Buzz';
    
    return input;
}


//////////////////////////////////////
// Exercice 4 : Demerit points

// Speed limit = 70
// for every 5 km above the speed limit = 1 point
// more than 12 points - 'License suspended'
// Math.floor(1.3)


checkSpeed(129);



function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
    console.log('Ok');
    else  {
       const points =  Math.floor((speed - speedLimit) / kmPerPoint);

       if (points >= 12)
       console.log('License suspended');
       else
       console.log('Points', points);
    }
}



// Tip to make the code cleaner - remove else block

//function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//  if (speed < speedLimit + kmPerPoint{
//     console.log('Ok');
//     return;
// }
//  
//  const points =  Math.floor((speed - speedLimit) / kmPerPoint);

//  if (points >= 12)
//      console.log('License suspended');
//  else
//      console.log('Points', points);
//     
// }



//////////////////////////////////////
// Exercise 5 : even and odd numbers

showNumbers(10);

function showNumbers(limit) {
    for (let i=0; i<=limit; i++) {
    if (i % 2 === 0)
    console.log(i, 'EVEN');
    else
    console.log(i, 'ODD');
     }
}

// alternatively

showNumbers(10);

function showNumbers(limit) {
    for (let i=0; i<=limit; i++) {
const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
console.log(i, message);  
     }
}

//////////////////////////////////////
// Exercise 6 : counting truthy values

const array = [1,2, "zouzou",3, undefined]

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count
}

console.log(countTruthy(array));

//////////////////////////////////////
// Exo 7 - display only string properties

const movie = {
title: 'a',
releaseYear: 2018,
rating: 4.5,
director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
      if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
}

//////////////////////////////////////
// Exo 8 - sum of multiples of 3 and 5

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
    let sum = 0; //initialization

    for (let i = 0; i<= limit; i++) // actual logic
    if (i % 3 === 0 || i % 5 === 0)
        sum +=i;

    return sum; // return value

}

console.log(sum(10))

//////////////////////////////////////
// EXO 9 - grades

const marks = [90, 90, 90];

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}

function calculateAverage(array) {
    let sum = 0;

    for (let value of array)
        sum+= value;
    return sum / array.length;
} // generic function for averaging

//////////////////////////////////////
// Exo 10 nested loop

showStars(5);

function showStars(rows) {
    for (let row = 1; row<= rows; row++) {
        let pattern =  '';
        for (let i = 0; i < row; i ++)
        pattern  += '*';
        console.log(pattern);
    }
}



//////////////////////////////////////
// Exo 11

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        // 2 - current (i)

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        } 
      if (isPrime)  console.log(number);
    }   
}

// and if we break it in smaller functions

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
        // 2 - current (i)
      if (isPrime(number))  console.log(number); 
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;
    return true;
}