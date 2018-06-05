import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ''
    }
  }
  componentDidMount(){
    this.wavesurfer = window.WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      scrollParent: false,
      minPxPerSec: 200,
      height: 300,
//      normalize: true,
      barHeight: .3
    });
    this.wavesurfer.load('/audio1.mp3');
  }
  play = () => {
    this.wavesurfer.playPause();
  };
  render() {
    return (
        <div className="App">
          <div id="waveform" style={{width:'100%', height:'300px'}}></div>
          <button onClick={this.play}>play</button>
        </div>
    );
  }
}

export default App;
