import "./LaunchButton.css";

import { Link } from "react-router-dom";
import React, { Component } from "react";

import type { MathRoute } from '../../../models/routeTypes';

type Props = {
   route: MathRoute
}
class LaunchButton extends Component<Props> {
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
