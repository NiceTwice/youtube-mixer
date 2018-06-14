import React, {Component, PureComponent, Fragment} from "react";

class FacebookConnect extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      checking: true,
      connected: false,
      connection: false
    }
  }
  facebookLogout = () => {
    window.FB.logout((response) => {
      this.setState({connected: false});
    });
  };
  facebookConnect = () => {
    console.log('connection with fb');
    this.setState({connection: true});
    window.FB.login((response)=> {
      if (response.status === 'connected'){
        this.setState({connected : true, connection: false});
        console.log('connection with fb worked');
      }else {
        this.setState({connection: false});
        console.log('connection didnt worked!');
      }
    });
  };
  componentDidMount(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '197955220827890',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.00'
      });

      window.FB.getLoginStatus((response) => {
        this.setState({checking: false});
        if (response.authResponse){
          console.log('logged in', response);
          this.setState({connected: true});
        } else {
          console.log('logged out', response);
        }
      });
    }.bind(this);

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  render(){
    return (
        <div>
          {this.state.checking &&
          'checking facebook connection'}
          {this.state.connected ?
              <button onClick={this.facebookLogout}>logout</button>:
              this.state.connection ?
                  'connection!':
                  <button onClick={this.facebookConnect}>connection</button>}
        </div>
    )
  }
}

export default FacebookConnect;