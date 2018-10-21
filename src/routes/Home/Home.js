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
      hasFilter: false
    }
  }

  clearFilter = () => {
    this.setState({
      routes: appletRoutes,
      hasFilter: false
    })
  }

  filterByType = ( type:string ) => {
    console.log("filter by type called")
    this.setState({
      routes: appletRoutes.filter(route => route.name === type),
      hasFilter: true
    })
  }

  filterBySubject = ( subject:string ) => {
    this.setState({
      routes: appletRoutes.filter(route => route.name === subject),
      hasFilter: true
    })
  }

  render() {
    return (
      <div className="Home">
        {this.state.hasFilter ? <TextButton
          text="Remove filter"
          onClick={this.clearFilter}/> : ""}
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
