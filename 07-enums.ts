/****************************************************
 * ENUM IN TYPESCRIPT
 * It's a collection of Named Values.
 * */


// let user = {
//   fullName: 'Shani Kumar Gupta',
//   age: 25,
//   role: 'ADMIN'
// };

// if (user.role === 'ADMIN') {
//   console.log('This user is an admin');
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const WRITE_ONLY = 2;
// const READ_WRITE = 3;

// let user = {
//   fullName: 'Shani Kumar Gupta',
//   age: 25,
//   role: ADMIN
// };

// if (user.role === ADMIN) {
//   console.log('This user is an admin');
// }

enum Roles {
  ADMIN, READ_ONLY, WRITE_ONLY, READ_WRITE
};

let user = {
  fullName: 'Shani Kumar Gupta',
  age: 25,
  role: Roles.ADMIN
};

if (user.role === Roles.ADMIN) {
  console.log('This user is an admin');
}