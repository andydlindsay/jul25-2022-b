"use strict";
// arguments, return value, name
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
sayHello('Bob', 42);
sayHello('Bob');
const returningPromise = (arg) => {
    return new Promise((resolve) => {
        resolve(arg);
    });
};
returningPromise(42)
    .then(data => { });
