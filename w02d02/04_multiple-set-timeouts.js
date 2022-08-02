const delays = [1234, 117, 144, 2580, 666];

for (const delay of delays) {
  setTimeout(() => {
    console.log(delay);
  }, delay);
}
