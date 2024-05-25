/**
 * OBJECT TYPE IN TYPESCRIPT
 *
 */

let person = {
  fullName: 'Shani Gupta',
  age: 25,
}; // Automatic Type Inferance

// person = { fullName: 'Dany', age: 34, gender: 'male' };

let student: object = {
  firstName: 'Shani',
  lastName: 'Gupta',
  age: 25,
};
// console.log(student.firstName);
console.log(student['firstName']);

student = { fullName: 'Shani Gupta' };

let car: {} = {
  brand: 'Tata',
  model: 'Nexon',
  color: 'black',
};

car = { make: 'TATA' };

let studentData: {
  name: string;
  age: number;
  isPass: boolean;
  address: { city: string; state: string };
} = {
  name: 'Shani',
  age: 25,
  isPass: true,
  address: {
    city: 'Gurgaon',
    state: 'Haryana',
  },
};
