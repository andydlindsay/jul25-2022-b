// const user = {
//   name: 'Alice',
//   age: 42,
//   likes: ['pizza']
// };

// // const bob = user;

// const bob = {
//   ...user,
//   name: 'Bob',
//   likes: [
//     ...user.likes,
//     'butter chicken waffles'
//   ]
// };

// // bob.likes.push('butter chicken waffles');

// // bob.name = 'Bob';

// console.log(user);
// console.log(bob);

// const arr = [1,2,3];
// const arr2 = [4,5,6];

// // const copy = arr;
// const copy = [
//   ...arr2,
//   ...arr,
//   10, 11, 12
// ];

// // copy.push(5);

// console.log(arr);
// console.log(copy);

// ['alice', 42] => 'alice', 42

const sayHello = (name, age) => {
  console.log(`hello ${name}, you are ${age}`);
};

const args = ['alice', 42];

sayHello(...args);
