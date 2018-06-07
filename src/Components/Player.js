import React, {Component, Fragment} from "react";

class Player extends Component {
  constructor(props){
    super(props);
    this.state = {
      progressHover: false,
      progressHoverX: 0
    }
  }
  componentDidMount(){
    this.wavesurfer = window.WaveSurfer.create({
      container: '#waveform',
      waveColor: '#666',
      progressColor: '#ea5300',
      scrollParent: false,
      minPxPerSec: 200,
      height: 100,
//      normalize: true,
      barHeight: .8,
      barWidth: 2
    });
    this.wavesurfer.load('/assets/audio1.mp3');
  }
  play = () => {
    this.wavesurfer.playPause();
  };
  onMouseMove = (e) => {
    const bounds = e.target.getBoundingClientRect();
    this.setState({progressHoverX: e.clientX - bounds.left});
  };
  render(){
    return (
        <div class="player">
          <div class="player_progress" onMouseMove={this.onMouseMove}>
            <div id="waveform" style={{width:'100%', height:'100px'}}/>
            <div class="player_progress_mouse" style={{width: this.state.progressHoverX}}/>
          </div>
          <button onClick={this.play}>play</button>
        </div>
    )
  }
}

export default Player;