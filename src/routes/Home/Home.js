import React, { Component } from "react";
import Card from "../../components/Card";

import "./Home.css";

type Props = {};
export default class Home extends Component<Props> {
  render() {
    console.log("rendering home");
    return (
      <div className="Home">
        {/*<Card route={1} />*/}
        <Card route={2} />
        <Card route={3} />
        <Card route={4} />
        <Card route={5} />
      </div>
    );
  }
}
