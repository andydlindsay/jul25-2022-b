"use strict";
const dog = {
    name: 'Doggie',
    worms: true,
    dewormDog: (numWorms) => { return true; }
};
const higherOrderFunc = (callback) => {
    callback('hello');
};
higherOrderFunc((name) => { });
