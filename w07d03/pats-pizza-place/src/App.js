import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';

const App = () => {
  const myProps = {
    message: `Pat's Pizza Place`
  };

  return (
    <div className="App">
      {/* <h2>[ Placeholder ]</h2> */}

      <Header {...myProps} /> { /* Header({ message: 'whatever' }) */ }

      <Pizza />
      {/* <VisitorCounter /> */}
    </div>
  );
};

export default App;
