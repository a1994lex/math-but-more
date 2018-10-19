import React, { Component } from "react";
import { homeRoute } from "../../routes";
import { TextButton } from "../Buttons";

import "./AppletHeader.css";

class AppletHeader extends Component {
  render() {
    return (
      <div className="AppletHeader">
        <TextButton route={homeRoute} text="Return to applets list" />
      </div>
    );
  }
}

export default AppletHeader;
