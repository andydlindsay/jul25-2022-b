interface IDog {
  name: string;
  worms: boolean;
  dewormDog: (numWorms: number) => boolean
}

const dog: IDog = {
  name: 'Doggie',
  worms: true,
  dewormDog: (numWorms) => { return true; }
}

const higherOrderFunc = (callback: (name: string) => void) => {
  callback('hello');
};

higherOrderFunc((name) => {});
