// console.log('3. top of the file');

const timeoutRef = setTimeout(() => {
  console.log('2. second timeout');
}, 3000);

const timeout2 = setTimeout(() => {
  console.log('3. time out');
}, 2000);


clearTimeout(timeoutRef, timeout2);

// console.log(timeoutRef);



// setTimeout(() => {
//   console.log('1. hello');
// }, 3000);

// console.log('4. bottom of the file');
