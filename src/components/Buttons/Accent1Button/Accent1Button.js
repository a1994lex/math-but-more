import React, { Component } from "react";

import "./Accent1Button.css";

type Props = {
   onClick: () => void,
   text: string,
}
class Accent1Button extends Component<Props> {
  render() {
    return (
      <div className="Accent1ButtonContainer">
        <div className="Accent1Button" onClick={this.props.onClick}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Accent1Button;
