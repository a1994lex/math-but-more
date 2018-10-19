import React, { Component } from "react";

import "./PrimaryButton.css";

class PrimaryButton extends Component {
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
