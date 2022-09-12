import './App.css';
import CoffeeList from './components/CoffeeList';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    axios.get('/coffees')
      .then((response) => {
        setCoffees(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>The Coffee App</h2>
      <CoffeeList coffees={coffees} />
    </div>
  );
};

export default App;
