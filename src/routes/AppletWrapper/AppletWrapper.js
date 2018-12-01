import './AppletWrapper.css'

import React, { Component } from 'react'

import { TextButton } from '../../components'

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
					{this.props.instructions}
				</div>
			</div>
		)
	}
}

export default AppletWrapper
