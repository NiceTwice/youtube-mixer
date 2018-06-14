import React, {Component, PureComponent} from "react";

class FacebookConnect extends PureComponent {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    FB.login((response) => {
      console.log(response);
    });
  }
  render(){
    return (
        <div></div>
    )
  }
}

export default FacebookConnect;