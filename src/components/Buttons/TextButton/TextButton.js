import "./TextButton.css";

import { Link } from "react-router-dom";
import React, { Component } from "react";

import type { MathRoute } from '../../../models/routeTypes';

type Props = {
   route?: MathRoute,
   onClick: ()=>void,
   text: string,
}
class TextButton extends Component<Props> {
  render() {
    if (this.props.route !== undefined) {
      return (
        <div className="TextButtonContainer">
          <Link to={this.props.route.path} key={this.props.route.path}>
            <div className="TextButton">
              {this.props.text ? this.props.text : this.props.route.name}
            </div>
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
