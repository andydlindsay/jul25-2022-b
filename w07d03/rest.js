const func = (age, name, ...pizza) => {
  // do something
  console.log(pizza);
};

func(42, 'alice', 'hawaiian', 'butter chicken', 'supreme');
// func(...args);