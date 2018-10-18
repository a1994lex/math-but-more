import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LaunchButton.css";

class LaunchButton extends Component {
  render() {
    return (
      <div className="LaunchButtonContainer">
        <Link to={this.props.route.path} key={this.props.route.path}>
          <div className="LaunchButton">Launch {this.props.route.name}!</div>
        </Link>
      </div>
    );
  }
}

export default LaunchButton;
