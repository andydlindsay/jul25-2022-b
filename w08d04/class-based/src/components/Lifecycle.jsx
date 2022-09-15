import {Component} from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      interval: null
    };
  }

  // data fetching, connect to websocket servers, set up intervals or timers
  // useEffect with an empty dependency array (only runs one time)
  componentDidMount() {
    console.log('the component has been mounted to the DOM');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 1000);

    this.setState({ interval });
  }

  // called every time state or props change
  // listen for certain changes and then run something
  // useEffect with something in the dependency array
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.count !== this.props.count) {

    // }
    console.log('the component has been updated');
  }

  // cleaning up
  // useEffect that returns a cleanup function
  componentWillUnmount() {
    console.log('the component will be removed from the DOM');

    console.log('clearing the interval?');
    clearInterval(this.state.interval);
  } 

  render() {
    return (
      <div>
        <h2>Lifecycle!!!</h2>
        <div>
          <label>Username:</label>
          <input 
            value={this.state.username}
            onChange={(event) => this.setState({ username: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default Lifecycle;
