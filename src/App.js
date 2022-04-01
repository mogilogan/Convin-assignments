import React, { Component } from 'react';
import Body from './components/body';
import Sticky from './components/sticky';

class App extends Component {

  render() {
    return (
      <div>
        <Sticky/>
        <Body/>
      </div>
    );
  }
}

export default App;
