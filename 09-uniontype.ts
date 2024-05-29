/*********************************************************
 * UNION TYPE IN TYPESCRIPT
 * All the possible type which a variable can store.
*/

let user: { name: string, age: number } | null = null;

function getUser(): { name: string, age: number | null } {
  const uname = 'Shani';
  const uage = 34;
  user = { name: uname, age: uage };
  return user ?? null;
}

console.log(getUser());

function printStatus(message: string, statusCode: string | number) {
  console.log(`${message}. Status Code: ${statusCode}`);
}

printStatus('Request was successful', 200);
printStatus('Bad Request', '400');
