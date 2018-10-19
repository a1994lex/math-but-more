import React, { Component } from "react";
import { LaunchButton } from "../";
import type { MathRoute } from "../../models";
import { routes } from "../../routes/routes";

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
          <h4>{routes[this.props.route].name}</h4>
          <LaunchButton route={routes[this.props.route]} />
        </div>
      </div>
    );
  }
}
