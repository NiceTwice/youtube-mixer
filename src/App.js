import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : '',
      palindrome: false
    }
  }
  onChange = (e) => {
    this.setState({value: e.target.value}, this.checkPalindrome);
  };
  checkPalindrome = () => {
    const {value} = this.state;
    const length = value.length / 2;

    for (let i = 0; i < length; i ++) {
      if (value[i] !== value[value.length - 1 - i]){
        this.setState({palindrome: false});
        return;
      }
    }
    this.setState({palindrome: true});
  };
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
          <input placeholder='your string'
                 onChange={this.onChange}
                 value={this.state.value}/>
          <span>is palindrome: {this.state.palindrome ? 'true': 'false'}</span>
        </div>
    );
  }
}

export default App;
