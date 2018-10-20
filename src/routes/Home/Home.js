import "./Home.css";

import React, { Component } from "react";

import { AppletCard } from '../../components';
import { appletRoutes } from "../routes";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <div className="Home">
        {appletRoutes.map((route: MathRoute) => (
          <AppletCard key={route.name} route={route}/>))
        }
      </div>
    );
  }
}
