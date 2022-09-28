interface IContainer<T, G> {
  name: string;
  contents: T;
  arr?: G[];
}

const stringContainer: IContainer<string, number> = {
  name: 'string container',
  contents: 'hello world'
};

const numberContainer: IContainer<number, boolean> = {
  name: 'number container',
  contents: 42
};
