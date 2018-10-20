import React, { Component } from "react";

import "./PrimaryButton.css";

type Props = {
   onClick: ()=>void,
   text: string,
}
class PrimaryButton extends Component<Props> {
  render() {
    return (
      <div className="PrimaryButtonContainer">
        <div className="PrimaryButton" onClick={this.props.onClick}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default PrimaryButton;
