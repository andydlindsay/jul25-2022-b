// arguments, return value, name

const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`;
};

sayHello('Bob', 42);
sayHello('Bob');

const returningPromise = (arg: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(arg);
  });
};

returningPromise(42)
  .then(data => {});

