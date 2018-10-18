import React, { Component } from "react";
import { LaunchButton } from "../";

import "./Card.css";

type Props = {};
export default class Card extends Component<Props> {
  render() {
    //TODO: finish card body
    return (
      <div className="CardContainer">
        <div className="Card">
          <h4>{this.props.route.name}</h4>
          <LaunchButton route={this.props.route} />
        </div>
      </div>
    );
  }
}
