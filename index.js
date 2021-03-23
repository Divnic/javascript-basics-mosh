// Hour
// If hour is between 6am and 12pm : Good morning!
// If hour is between 12pm and 6pm : Good afternoon!
// Otherwise : Good evening!

// if (condition) {

// statement
    
// }

// else if (anotherCondition) {

// }
 
// else 
//  statement


let hour = 20;

if (hour >= 6 && hour < 12) 
console.log('Good morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!');
else
console.log('Good evening!');