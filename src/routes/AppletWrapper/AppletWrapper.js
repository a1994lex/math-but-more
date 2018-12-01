import './AppletWrapper.css'

import React, { Component } from 'react'

type Props = {
	instructions: String,
	children: React$Node,
}
class AppletWrapper extends Component<Props> {
	constructor(props) {
		super(props)
		this.state = {
			instructionsVisible: false,
		}
	}
	render() {
		return (
			<div className="AppletWrapper">
				{this.props.children}
				<div className="AppletWrapper-DrawerButton">
					<div
						onClick={() => this.setState({ instructionsVisible: !this.state.instructionsVisible })}>
						?
					</div>
				</div>
				<div
					className={
						'AppletWrapper-Instructions' + (this.state.instructionsVisible ? '' : ' Closed')
					}>
					<p className="AppletWrapper-Instructions-Title">Instructions</p>
					<p>{this.props.instructions}</p>
				</div>
			</div>
		)
	}
}

export default AppletWrapper
