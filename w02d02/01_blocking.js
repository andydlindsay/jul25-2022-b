// console.log('do I run first?');

const date = new Date();

setTimeout(() => {
  console.log('when do I run????', date);
}, 1);

for (let i = 0; i < 10000; i++) {
  const date = new Date();
  console.log(date);
}

// console.log('when do I run??');
