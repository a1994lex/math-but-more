import React, { Component } from "react";

import "./TypeTag.css";

type Props = {
   onClick: type => void,
   type: string,
}
class TypeTag extends Component<Props> {
  //Class-level constants, for use when instantiating TypeTags
  static get TYPE_GAME() {
    return "Game";
  }
  static get TYPE_DEMO() {
    return "Demo";
  }

  render() {
    return (
      <div className="TypeTagContainer">
        <div
          className="TypeTag"
          onClick={() => this.props.onClick(this.props.type)}
        >
          Type: {this.props.type}
        </div>
      </div>
    );
  }
}

export default TypeTag;
