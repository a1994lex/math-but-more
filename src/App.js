import React, { Component } from 'react'
import { routes } from './routes'
import {Header, Sidebar} from './components'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css'

// TODO: Set up Redux store inside the store folder in src/
// TODO: Set up Less and add  *.css to the .gitingnore
// TODO: Use Tooltip as a redux example in App.js component
// TODO: Configure production site

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
        <Router>
					<div className="App">
						<Header/>
						<div className="layout-row">
              <Sidebar/>
							<div className="main-content">
                {routes.map((route, index) => (
                   <Route
                     key={index}
                     path={route.path}
                     exact = {route.exact || false}
                     component={route.main}
                   />
                ))}
							</div>
						</div>
					</div>
				</Router>
    );
  }
}
