"use strict";
// interface IDog {
//   id?: number;
//   name: string;
//   faveToy: string;
//   age: boolean;
// }
const user = {
    username: 'jstamos',
    password: '1234',
    friends: [],
};
const users = [];
users.push(user);
user.newKey = 'hello';
// users.push({});
// const user2 = {} as IUser;
// user2.password = 'hello';
// user2.username = 'jstamos';
// // from SO
// interface DynamicObject {
//   [key: string]: string;
// }
// const obj: DynamicObject = {};
// obj.name = 'hello';
// obj.otherThing = 'more stuff';
// obj.num = 42;
