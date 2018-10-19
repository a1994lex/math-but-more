import React, { Component } from "react";
import { LaunchButton } from "../";
import type { MathRoute } from "../../models";

import "./Card.css";

type Props = {
  route: MathRoute
};
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
