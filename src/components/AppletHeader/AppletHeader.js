import React, { Component } from "react";
import { routes } from "../../routes";
import { TextButton } from "../Buttons";

import "./AppletHeader.css";

class AppletHeader extends Component {
  render() {
    return (
      <div className="AppletHeader">
        <TextButton route={routes[0]} text="Return to applets list" />
      </div>
    );
  }
}

export default AppletHeader;
