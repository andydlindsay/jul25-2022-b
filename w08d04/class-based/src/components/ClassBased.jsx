import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);
    // super();

    this.state = {
      counter: 0,
      username: 'jstamos',
      newStuff: null
    };

    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    // this.state.counter++;
    this.setState({ 
      counter: this.state.counter + 1,
      newStuff: 'hello world'
    });
  }

  render() {
    return (
      <div>
        <h2>ClassBased Component</h2>
        <h2>{ this.props.message }</h2>
        <h2>Count: { this.state.counter }</h2>
        <button onClick={this.increment}>Click me!</button>
        {this.state.newStuff}
      </div>
    );
  }
};

export default ClassBased;
