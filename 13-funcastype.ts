/************************************************
 * FUNCTION AS TYPE IN TS
*/

type User = { fullName: string, age: number };

function greetUser(user: User) {
  const greetMsg = 'Hello, ' + user.fullName;
  console.log(greetMsg);
}

// let greet;
let greet: Function;
// let greet: (usr: User) => void; // Signature should match
greet = greetUser;

let userData = {
  fullName: 'Shani K Gupta',
  age: 25
}

greet(userData);

// greet = 100; Error - Runtime

/* Problem 2 */
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

greet = sum;
greet(userData);