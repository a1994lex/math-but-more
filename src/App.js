import React, { Component } from "react";
import { routes, Home } from "./routes";
import {
  Header,
  Sidebar,
  Card,
  TypeTag,
  SubjectTag,
  PrimaryButton,
  Accent1Button,
  Accent2Button,
  LaunchButton
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider, connect } from "react-redux";
import store from "./store";

import Tooltip from "react-portal-tooltip";

import "./App.css";

// TODO: Set up Redux store inside the store folder in src/
// TODO: Set up Less and add  *.css to the .gitingnore
// TODO: Use Tooltip as a redux example in App.js component
// TODO: Configure production site

type Props = {
  showTooltip: boolean,
  tooltipParent: string,
  tooltipContent: React$Component<*>,
  tooltipPosition: ?string
};

class App extends Component<Props> {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="layout-column">
            <div className="main-content">
              <PrimaryButton text="PrimaryButton" />
              <Accent1Button text="Accent1Button" />
              <Accent2Button text="Accent2Button" />
              <LaunchButton route={routes[1]} />
              <SubjectTag subject="Quick Maths" />
              <TypeTag type={TypeTag.TYPE_GAME} />
              <Home />
              {/*<Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact || false}
                    component={route.main}
                  />
                ))}
              </Switch>*/}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    showTooltip: state.tools.tooltip.isActive,
    tooltipParent: state.tools.tooltip.parent,
    tooltipContent: state.tools.tooltip.content,
    tooltipPosition: state.tools.tooltip.position
  };
}

const ConnectedApp = connect(mapStateToProps)(App);

export default class AppWrappedInProvider extends Component<void> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}
