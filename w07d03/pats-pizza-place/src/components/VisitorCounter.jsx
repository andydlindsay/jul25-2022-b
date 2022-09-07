import {useState} from 'react';

// let counter = 0;

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Number of visitors: {counter}</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
