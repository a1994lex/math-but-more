import React, { Component } from 'react'
import { applets, Home, homeRoute, AppletWrapper } from './routes'
import { Header } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store from './store'
import Modal from 'react-modal'
// import Tooltip from "react-portal-tooltip";

import './main.css'

// TODO: Configure production site

type Props = {
	showTooltip: boolean,
	tooltipParent: string,
	tooltipContent: React$Component<*>,
	tooltipPosition: ?string,
}

class App extends Component<Props> {
	componentDidMount() {
		Modal.setAppElement('#root')
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Header title />
					<div className="main-content">
						<Route key={0} path={homeRoute.path} exact={true} component={Home} />
						{applets.map((applet, index) => {
							if (applet.route.dev) return null
							return (
								<Route
									key={index + 1}
									path={applet.route.path}
									exact={applet.route.exact || false}
									render={() => (
										<AppletWrapper instructions={applet.instructions}>
											<applet.route.main />
										</AppletWrapper>
									)}
								/>
							)
						})}
					</div>
				</div>
			</Router>
		)
	}
}

function mapStateToProps(state) {
	return {
		showTooltip: state.tools.tooltip.isActive,
		tooltipParent: state.tools.tooltip.parent,
		tooltipContent: state.tools.tooltip.content,
		tooltipPosition: state.tools.tooltip.position,
	}
}

const ConnectedApp = connect(mapStateToProps)(App)

export default class AppWrappedInProvider extends Component<void> {
	render() {
		return (
			<Provider store={store}>
				<ConnectedApp />
			</Provider>
		)
	}
}
