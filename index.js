// decimal to binary conversion

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011   R =  (result of 1 OR 2) 
// 0 = 00000000  R =  (result of 1 AND 2) 

// console.log(1 | 2); // | bitwise OR
// console.log(1 & 2); // | bitwise AND

// Imagine you wanna implement an access-controlled system
// user can have these permissions:
// read, write, execute
// 00000100 = 4
// 00000110
// 00000111

const readPermission = '4'
const writePermission = '2'
const executePermission = '1'

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

let message = 
(myPermission & readPermission) ? 'yes' : 'no';

console.log(message);