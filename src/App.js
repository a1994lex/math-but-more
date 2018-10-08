import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// TODO: Set up Redux store inside the store folder in src/
// TODO: Set up Less and add  *.css to the .gitingnore
// TODO: Set up flow and add component types
// TODO: Set up routes from this component while importing components from routes folder
// TODO: Use Tooltip as a redux example in App.js component
// TODO: Configure production site

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Math But More</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
