import React, { Component } from 'react';
import Player from "./components/Player";
import FacebookConnect from "./components/FacebookConnect";

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="App">
          <Player/>
          <FacebookConnect/>
        </div>
    );
  }
}

export default App;
