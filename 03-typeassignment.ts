/****************************************************************
 * Type Assignment & Type Inferance
 * 
*/

/* Explicitly assigning the datatype to variables */

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(12, 13));
// console.log(sum('12', 13));

let n1 = 20; // Automatic Type Inferance basis value assignment
let n2: number = 10; // Explicitly assigned the data type

console.log(sum(n1, n2));