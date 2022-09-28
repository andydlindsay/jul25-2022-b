// interface IDog {
//   id?: number;
//   name: string;
//   faveToy: string;
//   age: boolean;
// }

interface IUser {
  username: string;
  password: string;
  friends: IUser[];
  // dog?: IDog;
  newKey?: string;
}

const user: IUser = {
  username: 'jstamos',
  password: '1234',
  friends: [],
};

const users: IUser[] = [];

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

