import './App.css';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import {useState} from 'react';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  const toggleView = () => {
    setShowLifecycle(!showLifecycle);
  };

  return (
    <div className="App">
      <h2>W8D4 Lecture</h2>
      <button onClick={toggleView}>Change view</button>

      { showLifecycle && <Lifecycle /> }
      { !showLifecycle && <ClassBased message="hello world" /> }
      {/* <Lifecycle /> */}
    </div>
  );
};

export default App;

// const classBased = new ClassBased({ message: 'hello world' });
// classBased.props = { message: 'hello world' };
