import "./TextButton.css";

import { Link } from "react-router-dom";
import React from "react";

import type { MathRoute } from '../../../models/routeTypes';

type Props = {
   route?: MathRoute,
   onClick: ()=>void,
   text: string,
}
function TextButton( props:Props) {
  if (props.route !== undefined) {
    return (
      <div className="TextButtonContainer">
        <Link to={props.route.path} key={props.route.path}>
          <div className="TextButton">
            {props.text ? props.text : props.route.name}
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="TextButtonContainer">
        <div className="TextButton" onClick={props.onClick}>
          {props.text}
        </div>
      </div>
    );
  }
}

export default TextButton;
