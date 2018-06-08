import React, {Component, Fragment} from "react";
import {secToMin} from 'utils';

class Player extends Component {
  constructor(props){
    super(props);
    this.state = {
      progressHover: false,
      progressHoverX: 0,
      currentTime: null,
      totalDuration: null
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
    this.wavesurfer.on('ready', () => {
      const duration = this.wavesurfer.getDuration();
      const currentTime = this.wavesurfer.getCurrentTime();
      this.setState({currentTime: currentTime, totalDuration: duration});
    });
    this.wavesurfer.on('audioprocess', () => {
      const currentTime = this.wavesurfer.getCurrentTime();
      this.setState({currentTime: currentTime});
    });
    this.wavesurfer.on('seek', (progress)=>{
      const currentTime = this.wavesurfer.getCurrentTime();
      this.setState({currentTime: currentTime});
    });
    this.wavesurfer.load(process.env.PUBLIC_URL + '/assets/audio1.mp3');
  }
  play = () => {
    this.wavesurfer.playPause();
  };
  onProgressMouseMove = (e) => {
    const bounds = e.target.getBoundingClientRect();
    this.setState({progressHoverX: e.clientX - bounds.left});
  };
  render(){
    return (
        <div class="player">
          <div class="player_progress" onMouseMove={this.onProgressMouseMove}>
            <div id="waveform" style={{width:'100%', height:'100px'}}/>
            <div class="player_progress_mouse" style={{width: this.state.progressHoverX}}/>
          </div>
          <div class="player_song_info">
            {this.state.currentTime !== null &&
            <span>{secToMin(this.state.currentTime)}</span>}
            {this.state.totalDuration!== null &&
            <span style={{float: 'right'}}>{secToMin(this.state.totalDuration)}</span>}
          </div>
          <button onClick={this.play}>play</button>
        </div>
    )
  }
}

export default Player;