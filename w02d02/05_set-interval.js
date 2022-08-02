let count = 10;

const intervalReference = setInterval(() => {
  count--;
  console.log('hello', count);

  if (count === 0) {
    clearInterval(intervalReference);
  }
}, 500);

// setTimeout(() => {
//   clearInterval(intervalReference);
// }, 2000);
