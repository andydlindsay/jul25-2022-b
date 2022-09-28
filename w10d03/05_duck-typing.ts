interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  return true;
};

const userTwo = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'extra things'
};

login(userTwo);
