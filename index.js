// Logical AND (&&)
// returns TRUE if both operands are true

// console.log(true && true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('Eligible', eligibleForLoan);

// Logical OR (||)
// returns TRUE if one of the operands is true

let cheese = true;
let dessert = false;
let afterMeal = cheese || dessert;

console.log(afterMeal);

// not (!)
let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);


// Logical operators with Non-booleans ()

// Falsy values: undefined, null, 0, (boolean) false,'' (empty string), NaN (not a number)

// Anything not Falsy -> Truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

