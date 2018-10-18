import React, { Component } from "react";

import "./SubjectTag.css";

class SubjectTag extends Component {
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
