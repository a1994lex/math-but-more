import React, { Component } from "react";

import "./TypeTag.css";

class TypeTag extends Component {
  render() {
    return (
      <div className="TypeTagContainer">
        <div className="TypeTag" onClick={this.props.onClick}>
          Type: {this.props.type}
        </div>
      </div>
    );
  }
}

export default TypeTag;
