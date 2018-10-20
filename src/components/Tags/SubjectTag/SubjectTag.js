import React, { Component } from "react";

import "./SubjectTag.css";

type Props = {
   onClick: subject => void,
   subject: string,
}
class SubjectTag extends Component<Props> {
  render() {
    return (
      <div className="SubjectTagContainer">
        <div
          className="SubjectTag"
          onClick={() => this.props.onClick(this.props.subject)}
        >
          Subject: {this.props.subject}
        </div>
      </div>
    );
  }
}

export default SubjectTag;
