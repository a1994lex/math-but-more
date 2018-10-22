import "./Home.css";

import React, { Component } from "react";

import { AppletCard, TextButton } from '../../components';
import { appletRoutes } from "../routes";

type Props = {};
export default class Home extends Component<Props> {
  constructor() {
    super()
    this.state = {
      routes: appletRoutes,
      filter: ""
    }
  }

  clearFilter = () => {
    this.setState({
      routes: appletRoutes,
      filter: ""
    })
  }

  filterByType = ( type:string ) => {
    this.setState({
      routes: appletRoutes.filter(route => route.name === type),
      filter: "Type: " + type
    })
  }

  filterBySubject = ( subject:string ) => {
    this.setState({
      routes: appletRoutes.filter(route => route.name === subject),
      filter: "Subject: " + subject
    })
  }

  render() {
    return (
      <div className="Home">
        {this.state.filter !== "" ? <div className="Home-filter-indicator">
          <h3>{this.state.filter}</h3><TextButton
          text="Remove filter"
          onClick={this.clearFilter}/></div> : ""}
        {this.state.routes.map((route: MathRoute) => (
          <AppletCard
            key={route.name}
            onSubjectClick={this.filterBySubject}
            onTypeClick={this.filterByType}
            route={route}/>))
        }
      </div>
    );
  }
}
