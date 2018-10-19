import React, { Component } from "react";
import AppletHeader from "../../components/AppletHeader";

type Props = {};

export default class Homography extends Component<Props> {
  render() {
    return (
      <div className="Homography">
        <AppletHeader />
        <p>Homography</p>
      </div>
    );
  }
}
