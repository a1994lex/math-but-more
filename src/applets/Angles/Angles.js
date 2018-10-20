import { connect } from "react-redux";
import React, { Component } from "react";

import { AppletHeader } from '../../components';
import { showTooltip, hideTooltip } from "../../store/tools";

type Props = {
  showTooltip: Function,
  hideTooltip: Function
};

class Angles extends Component<Props> {
  render() {
    return (
      <div className="Angles">
        <button
          id={"button"}
          onClick={() => {
            this.props.showTooltip("test", "#button");
            setTimeout(() => this.props.hideTooltip(), 2000);
          }}
        >
          Hey
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  showTooltip,
  hideTooltip
};

export default connect(
  null,
  mapDispatchToProps
)(Angles);
