import React, { Component } from 'react';
import Player from "./components/Player";

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="App">
          <Player/>
        </div>
    );
  }
}

export default App;
