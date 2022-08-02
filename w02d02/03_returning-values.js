const higherOrderFunc = (cb) => {
  const user = {
    username: 'Alice'
  };
  console.log('1. before the timeout');
  setTimeout(() => {
    user.username = 'Bob';
    console.log('6. inside the timeout');
    cb(user);
  }, 3000);
  console.log('2. after the timeout');
};

console.log('4. before the main call');

higherOrderFunc((something) => {
  console.log('something', something);
  console.log('3. inside the callback');
});

// setTimeout(() => {
//   console.log('returnVal', returnVal);
// }, 3001);

console.log('5. after the main call');

