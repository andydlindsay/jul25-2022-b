import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crust, setCrust] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'stuffed'
  });

  const addToppingToPizza = () => {
    setPizza((prev) => {
      return {
        ...prev,
        toppings: [
          ...prev.toppings,
          newTopping
        ]
      };
    });

    // setToppings((prev) => {
    //   return [...prev, newTopping];
    // });
    setNewTopping('');
  };

  const toppingsMap = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  const updateCrust = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        crust: event.target.value
      };
    });
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <label>New crust:</label>
        <input 
          value={pizza.crust}
          onChange={updateCrust}
        />
        <h3>Crust: {pizza.crust}</h3>
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addToppingToPizza}>Add to pizza!</button>
      </div>

      <h2>Toppings</h2>
      { toppingsMap }
    </div>
  );
};

export default Pizza;
