import React, { Component } from "react";
import Card from "../../components/Card";
import { appletRoutes } from "../routes";

import "./Home.css";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <div className="Home">
        {appletRoutes.map((route: MathRoute) => (
          <Card key={route.name} route={route}/>))}
      </div>
    );
  }
}
