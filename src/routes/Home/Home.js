import React, { Component } from "react";
import Card from "../../components/Card";
import { appletRoutes } from "../routes";

import "./Home.css";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    console.log("rendering home");
    return (
      <div className="Home">
        <Card route={appletRoutes[0]} />
        <Card route={appletRoutes[1]} />
        <Card route={appletRoutes[2]} />
        <Card route={appletRoutes[3]} />
        <Card route={appletRoutes[4]} />
      </div>
    );
  }
}
