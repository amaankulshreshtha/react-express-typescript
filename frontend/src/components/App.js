import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Hello World'
    };
  }
  render() {
    const { welcome } = this.state;
    return (
      <div>
        <h1>{welcome}</h1>
      </div>
    );
  }
}

export default App;
