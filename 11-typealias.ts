/*********************************************************
 * TYPE ALIAS IN TS
 * It's used to define a type using Custom Name.
*/

type stringType = string;
let fullName: stringType;
fullName = 'Shani Kumar Gupta';
// fullName = 67; // Error

type roleLiteralType = 'admin' | 'read' | 'read-write';
let userRole: roleLiteralType;
userRole = 'admin';
// userRole = 34; // Error

type unionType = string | number | boolean;
let unionVal: unionType;
unionVal = 56;
unionVal = 'Test';
unionVal = true;
// unionVal = {}; // Error

type Person = {
  fullName: string,
  age: number,
  address: {
    city: string,
    state: string,
    pincode: number
  }
};

let userDetails: Person;
userDetails = {
  fullName: 'Shani K Gupta',
  age: 26,
  address: {
    city: 'Renukoot',
    state: 'UP',
    pincode: 231217
  }
};