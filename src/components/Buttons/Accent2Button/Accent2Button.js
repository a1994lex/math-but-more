import React, { Component } from "react";

import "./Accent2Button.css";

class Accent2Button extends Component {
  render() {
    return (
      <div className="Accent2ButtonContainer">
        <div className="Accent2Button" onClick={this.props.onClick}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Accent2Button;
