import React, { Component } from "react";
import { Card, LaunchButton } from "../../components";
import { appletRoutes } from "../routes";

import "./Home.css";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <div className="Home">
        {appletRoutes.map((route: MathRoute) => (
          <Card key={route.name}>
            <h3>{route.name}</h3>
            <LaunchButton route={route}/>
          </Card>))
        }
      </div>
    );
  }
}
