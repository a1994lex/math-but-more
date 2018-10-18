import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./TextButton.css";

class TextButton extends Component {
  render() {
    if (this.props.route !== undefined) {
      return (
        <div className="TextButtonContainer">
          <Link to={this.props.route.path} key={this.props.route.path}>
            <div className="TextButton">{this.props.route.name}</div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="TextButtonContainer">
          <div className="TextButton" onClick={this.props.onClick}>
            {this.props.text}
          </div>
        </div>
      );
    }
  }
}

export default TextButton;
