import "./LaunchButton.css";

import { Link } from "react-router-dom";
import React from "react";

import type { MathRoute } from '../../../models/routeTypes';

type Props = {
   route: MathRoute
}
function LaunchButton( props:Props ) {
  return (
    <div className="LaunchButtonContainer">
      <Link to={props.route.path} key={props.route.path}>
        <div className="LaunchButton">Launch {props.route.name}!</div>
      </Link>
    </div>
  );
}

export default LaunchButton;
